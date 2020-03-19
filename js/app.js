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
			remaining(){
				// 过滤未完成的任务(未完成的为fase, !为true，true的才被过滤出来)
				const unFinishItems = this.items.filter(item => !item.completed)
				return unFinishItems.length
			}
		},
		methods: {
			addItem(event){
				// console.log(event.target.value);  // 获取文本输出框的值
				const content = event.target.value.trim()
				if (!content.length){  // 值为空，则0，那么返回false，!则为true，直接不做处理
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
