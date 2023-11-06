import { defineComponent } from 'vue'
import MyTable from '../components/myTable'

export default defineComponent({
	setup() {
		return () => (
			<>
				<div class="w-screen h-screen bg-white">
					<MyTable name="app's child" />
				</div>
			</>
		)
	}
})
