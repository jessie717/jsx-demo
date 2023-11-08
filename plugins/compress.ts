import fs from 'fs'
import path from 'path'
import compressing from 'compressing'

interface CompressOptions {
	source?: string // 待压缩原目录
	target?: string // 待生成目标目录
	type?: string // 压缩类型
	rm?: boolean // 是否删除原[source]目录
}
const options = {
	source: 'dist',
	target: 'dist',
	type: 'zip'
}

const removeDistDir = (dir: string) => {
	const files = fs.readdirSync(dir)
	if (files.length) {
		files.forEach((file) => {
			const filepath = path.resolve(dir, file)
			const stat = fs.statSync(filepath)
			if (stat.isDirectory()) {
				removeDistDir(filepath)
			} else {
				fs.unlinkSync(filepath)
			}
		})
		fs.rmdirSync(dir)
	} else {
		fs.rmdirSync(dir)
	}
	console.info(`${dir} delete successful`)
}

export const compress = (option: CompressOptions = options) => {
	const source = option.source ?? 'dist'
	const target = option.target ?? `dist`
	const type = option.type ?? 'zip'
	const rm = option.rm ?? false
	const dest = path.resolve(__dirname, '../', source)
	return {
		name: 'compress',
		closeBundle() {
			const root = process.cwd()
			const file = path.resolve(root, `${target}.${type}`)
			fs.access(file, fs.constants.F_OK, (err) => {
				if (!err) {
					console.log(`${file}已存在,删除中...`)
					fs.unlink(file, (err) => {
						if (err) throw err
						console.info(`${file}删除完成`)
					})
				}
				console.log(`compressing ${target}.${type} begin...`)
				compressing.zip
					.compressDir(dest, `${target}.zip`)
					.then(() => {
						console.info(`compressing ${target} successful`)
						if (rm) {
							const dir = path.resolve(root, 'dist')
							fs.access(dir, fs.constants.F_OK, (err) => {
								if (!err) {
									console.log(`${dir} delete begin...`)
									removeDistDir(dir)
								}
							})
						}
					})
					.catch((e) => console.log('e', e))
			})
		}
	}
}
