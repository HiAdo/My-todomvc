# Vue TodoMVC
[模板地址](https://github.com/tastejs/todomvc-app-template)
## 需求说明
___
1. 数据列表渲染

- 当任务列表（items ）没有数据时， #main 和 #footer 标识的标签应该被隐藏
任务涉及字段 : id 、任务名称（name ）、是否完成（ completed true 为已完成）
![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/1_%E6%95%B0%E6%8D%AE%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93.png?raw=trueg "title")

2. 添加任务

- 在最上面的文本框中添加新的任务。
- 不允许添加非空数据。
- 按 Enter 键添加任务列表中，并清空文本框。
- 当加载页面后文本框自动获得焦点，在 input 上使用 autofocus 属性可获得。

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/2_%E6%B7%BB%E5%8A%A0%E4%BB%BB%E5%8A%A1.png?raw=true "title")

3. 显示所有未完成任务数
   
- 左下角要显示未完成的任务数量。确保数字是由 <strong> 标签包装的。
- 还要将 item 单词多元化( 1 没有 s , 其他数字均有 s )： 0 items , 1 item , 2 items

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/3_%E6%98%BE%E7%A4%BA%E6%89%80%E6%9C%89%E6%9C%AA%E5%AE%8C%E6%88%90%E4%BB%BB%E5%8A%A1%E6%95%B0.png?raw=true "title")

4. 切换所有任务状态

- 点击复选框 V 后，将所有任务状态标记为复选框相同的状态。

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/4_1%E5%88%87%E6%8D%A2%E6%89%80%E6%9C%89%E4%BB%BB%E5%8A%A1%E7%8A%B6%E6%80%81.png?raw=true "title")
 
- 当 选中/取消 了单个任务时，复选框 V 也应同步更新。

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/4_2%E5%88%87%E6%8D%A2%E6%89%80%E6%9C%89%E4%BB%BB%E5%8A%A1%E7%8A%B6%E6%80%81.png?raw=true "title")

5. 移除任务项

- 悬停在某个任务项上显示 X 移除按钮，可点击移除当前任务项。

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/5_%E7%A7%BB%E9%99%A4%E4%BB%BB%E5%8A%A1%E9%A1%B9.png?raw=true "title")

6. 清除所有已完成任务

- 单击右下角 Clear completed 按钮时，移除所有已完成任务。
- 单击 Clear completed 按钮后，确保复选框清除了选中状态。
- 当列表中没有已完成的任务时，应该隐藏 Clear completed 按钮。

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/6_%E6%B8%85%E9%99%A4%E6%89%80%E6%9C%89%E5%B7%B2%E5%AE%8C%E6%88%90%E4%BB%BB%E5%8A%A1.png?raw=true "title")

7. 编辑任务项

-  双击 <label> （某个任务项）进入编辑状态（在 <li> 上通过 .editing 进行切换状态）。
- 进入编辑状态后输入框显示原内容，并获取编辑焦点。
- 输入状态按 Esc 取消编辑， editing 样式应该被移除。
- 按 Enter 键 或 失去焦点时 保存改变数据，移除 editing 样式；

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/7_%E7%BC%96%E8%BE%91%E4%BB%BB%E5%8A%A1%E9%A1%B9.png?raw=true "title")

8. 路由状态切换（过滤不同状态数据）

- 根据点击的不同状态（ All / Active / Completed ），进行过滤出对应的任务，并进行样式的切换。

![alt text](https://github.com/HiAdo/mdPhotos/blob/master/my-todomvc/8_%E8%B7%AF%E7%94%B1%E7%8A%B6%E6%80%81%E5%88%87%E6%8D%A2.png?raw=true "title")

9. 将所有任务项数据持久化到 localStorage 中,它主要是用于本地存储数据。
