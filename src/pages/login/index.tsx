import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton, ElInput } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

export default defineComponent({
	name: 'login',
	components: { ElButton, ElInput },
	setup() {
		const router = useRouter()
		const user = reactive<User>({
			name: '',
			password: ''
		})
		const handleLogin = () => {
			console.log('user', user)
			router.replace({ path: '/' })
		}
		const handleRegister = () => {
			console.log('user', user)
		}
		return () => (
			<div class={'w-screen h-screen flex justify-center items-center'}>
				<div class={'w-1/4 p-4 border rounded-md flex flex-col'}>
					<div class={'text-center text-2xl font-bold my-4'}>信息查询系统</div>
					<el-input
						v-model={user.name}
						class={'w-1/2 h-8 my-2'}
						placeholder="please input username"
						prefix-icon={User}
						clearable
					/>
					<el-input
						v-model={user.password}
						type={'password'}
						class={'w-1/2 h-8 my-2'}
						placeholder="please input password"
						prefix-icon={Lock}
						clearable
					/>
					<div class={'flex justify-center mt-12'}>
						<el-button type="success" class={'w-1/2'} onClick={() => handleLogin()}>
							登录
						</el-button>
						<el-button type="info" class={'w-1/2'} onClick={() => handleRegister()}>
							注册
						</el-button>
					</div>
				</div>
			</div>
		)
	}
})
