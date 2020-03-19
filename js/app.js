(function (Vue) {  // 表示依赖全局Vue
	const items = [
		{
			id: 1,
			content: "Vuejs",
			completed: false
		},
		{
			id: 2,
			content: "Golang",
			completed: false
		},
		{
			id: 3,
			content: "Python",
			completed: true
		},
	]
	new Vue({
		el: '#todoapp',
		data: {
			items,
		},
		computed: {
			toggleAll: {
				get() {
					console.log("当get方法里面的属性性发生变化时，更新toggleAll值");
					return this.remaining === 0;  // 当剩余任务为0时，返回true，即更新toggleAll复选框value为true
				},
				set(newStatus) {  // 当toggleAll属性发生变化时，调用setter，将每个任务的completed的值都设置和toggleAll一样
					console.log("当toggleAll属性变化时，调用set方法");
					this.items.forEach(item => {
						item.completed = newStatus
					});
				}
			},
			remaining() {
				// 过滤未完成的任务(未完成的为fase, !为true，true的才被过滤出来)
				const unFinishItems = this.items.filter(item => !item.completed)
				return unFinishItems.length
			}
		},
		methods: {
			addItem(event) {
				// console.log(event.target.value);  // 获取文本输出框的值
				const content = event.target.value.trim()
				if (!content.length) {  // 值为空，则0，那么返回false，!则为true，直接不做处理
					return
				}
				const id = items.length + 1
				items.push(
					{
						id,
						content,
						completed: false
					}
				)
				event.target.value = ""  // 输入完成后清空文本框

			}
		}
	})

})(Vue);
