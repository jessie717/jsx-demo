import { defineComponent } from 'vue'
import { ElButton, ElCheckbox } from 'element-plus'

import MyTable from '@/components/myTable'
import { columns, tableData } from '@/components/myTable/mock'
import MyPagination from '@/components/myPagination'

export default defineComponent({
	name: 'Home',
	components: { ElButton, ElCheckbox },
	setup() {
		const handleCheck = (id: string) => {
			console.log('check id', id)
		}
		const handleDelete = (row: TableDataItem) => {
			console.log('row', row)
		}
		const handleCurrentChange = (cur: number) => {
			console.log('cur', cur)
		}
		const handleSizeChange = (size: number) => {
			console.log('size', size)
		}
		// const slots = {
		// 	operation: (row: TableDataItem) => (
		// 		<>
		// 			<el-button type="success" onClick={() => handleCheck(row.id)}>
		// 				查看
		// 			</el-button>
		// 			<el-button type="danger" onClick={() => handleDelete(row)}>
		// 				删除
		// 			</el-button>
		// 		</>
		// 	)
		// }
		return () => (
			<>
				<div class="w-screen h-screen bg-white">
					{/* <MyTable tableData={tableData} columns={columns} v-slots={slots}></MyTable> */}
					<MyTable tableData={tableData} columns={columns}>
						{{
							operation: (row: TableDataItem) => (
								<>
									<el-button type="success" onClick={() => handleCheck(row.id)}>
										查看
									</el-button>
									<el-button type="danger" onClick={() => handleDelete(row)}>
										删除
									</el-button>
								</>
							)
							// selection: () => <el-checkbox />
						}}
					</MyTable>
					<MyPagination
						pageTotal={256}
						page={3}
						size={10}
						onCurrentChange={(cur: number) => handleCurrentChange(cur)}
						onSizeChange={(size: number) => handleSizeChange(size)}
					/>
				</div>
			</>
		)
	}
})
