import { defineComponent } from 'vue'
import { ElButton, ElCheckbox } from 'element-plus'

import MyTable from '@/components/myTable'
import { columns, tableData } from '@/components/myTable/mock'

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
				</div>
			</>
		)
	}
})
