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
		}
	})

})(Vue);
