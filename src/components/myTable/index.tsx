import { defineComponent } from 'vue'
import { ElButton, ElTable, ElTableColumn } from 'element-plus'

export default defineComponent({
	props: {
		tableData: {
			type: Array<TableDataItem>,
			required: true
		},
		columns: {
			type: Array<ColumnItem>,
			required: true
		}
	},
	components: { ElButton, ElTable, ElTableColumn },
	setup(props, { slots }) {
		console.log('slots', slots)
		const renderTableColumn = (col: ColumnItem) => {
			return (
				<el-table-column prop={col.prop} label={col.label} width={col.width} align={col.align} type={col.type}>
					{(scope: TableColumnScope) => col.slot && col.slot === 'operation' && slots.operation?.(scope.row)}
				</el-table-column>
			)
		}
		return () => (
			<div class={'p-4'}>
				<el-table data={props.tableData} header-row-class-name="text-black font-bold" border>
					{/* {props.columns.map((col) => (
						<el-table-column prop={col.prop} label={col.label} width={col.width} align={col.align} type={col.type}>
							{(scope: TableColumnScope) => col.slot && col.slot === 'operation' && slots.operation?.(scope.row)}
						</el-table-column>
					))} */}
					{props.columns.map((col) => renderTableColumn(col))}
				</el-table>
			</div>
		)
	}
})
