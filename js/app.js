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
	Vue.directive('focus-app', {
		inserted(el, binding){
			el.focus()
		},
		update(el, binding){  // 与inserted不同的是，双击后数据进行了更新渲染，所以应该用update勾子
			if(binding){  // 只有currentItem = el时，才设置为焦点
				el.focus()
			}
		}
	})
	new Vue({
		el: '#todoapp',
		data: {
			items,
			currentItem: null,
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
			finishEdit(item, index, event){
				// 1.获取当前输入框的值
				const content = event.target.value.trim()
				// 2.判断输入框的值是否为空，如果为空，则移除该任务项
				if (!content) {
					this.removeItem(index)
					return
				}
				// 3.如果不为空，则更新任务项
				item.content = content
				// 4.移除editing样式，退出编辑状态
				this.currentItem = null

			},
			cancelEdit(){
				// 当esc按下时，将currentItem赋值为null,那么editing: item === currentItem 为false，编辑框就取消
				// 而且当前输入框的value是单向绑定，无论视图怎么改，数据都不会变
				this.currentItem = null
			},
			toEdit(item){
				// 双击label，使得currentItem由null变成item，使 item === currentItem 为true, 当为true时，editing生效，进入编辑状态
				this.currentItem = item
			},
			removeCompleted(){
				// 将所有未完成的任务过滤出来赋值给items，从而清除已完成任务
				this.items = this.items.filter(item => !item.completed)
			},
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
			},
			removeItem(index){
				this.items.splice(index, 1)
			}
		}
	})

})(Vue);
