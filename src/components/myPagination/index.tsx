import { computed, defineComponent, ref } from 'vue'
import { ElPagination } from 'element-plus'

export default defineComponent({
	components: { ElPagination },
	props: {
		pageTotal: {
			type: Number,
			required: true
		},
		page: {
			type: Number,
			required: true
		},
		size: {
			type: Number,
			required: false,
			default: 10
		},
		pageSizes: {
			type: Array<Number>,
			required: false,
			default: [10, 20, 50]
		}
	},
	emits: ['sizeChange', 'currentChange'],
	setup(props, { emit }) {
		const currentPage = computed({
			get() {
				return props.page
			},
			set(current) {
				emit('currentChange', current)
			}
		})
		const pageSize = computed({
			get() {
				return props.size
			},
			set(size) {
				emit('sizeChange', size)
			}
		})
		const handleSizeChange = (size: number) => {
			emit('sizeChange', size)
		}
		const handleCurrentChange = (current: number) => {
			console.log('current', current)
			emit('currentChange', current)
		}
		return () => (
			<div>
				<el-pagination
					v-model:current-page={currentPage.value}
					v-model:page-size={pageSize.value}
					total={props.pageTotal}
					page-sizes={props.pageSizes}
					background
					layout="total, sizes, prev, pager, next, jumper"
					on-size-change={handleSizeChange}
					on-current-change={handleCurrentChange}
				/>
			</div>
		)
	}
})
