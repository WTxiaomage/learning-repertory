1. 对象（Object）
	- 对象是JS中的引用数据类型
	- 对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性
	- 使用typeof检查一个对象时，会返回object
	
	- 对象的分类：
		1. 内建对象
			- 由ES标准中定义的对象，在任何的ES的实现中都可以使用
			- 比如：Math String Number Boolean Function Object....
		2. 宿主对象
			- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
			- 比如 BOM DOM
		3. 自定义对象
			- 由开发人员自己创建的对象	
	
	- 创建对象
		- 方式一：
			- var obj = new Object();
		- 方式二：
			- var obj = {};
			
	- 向对象中添加属性
		- 语法：
			```
			对象.属性名 = 属性值;
			对象["属性名"] = 属性值;
			```
			- 对象的属性名没有任何要求，不需要遵守标识符的规范，
				但是在开发中，尽量按照标识符的要求去写。
			- 属性值也可以任意的数据类型。

	- 读取对象中的属性
		- 语法：
			```
			对象.属性名
			对象["属性名"]
			```
		- 如果读取一个对象中没有的属性，它不会报错，而是返回一个undefined
		
	- 删除对象中的属性
		- 语法：
			```
			delete 对象.属性名
			delete 对象["属性名"]
			```

	- 使用in检查对象中是否含有指定属性
		- 语法：
			```
			"属性名" in 对象
			```
			- 如果在对象中含有该属性，则返回true
				如果没有则返回false
				
	- 使用对象字面量，在创建对象时直接向对象中添加属性
		- 语法：
			```
			var obj = {
							属性名:属性值,
							属性名:属性值,
							属性名:属性值,
							属性名:属性值
					  }
			```	
	- 基本数据类型和引用数据类型
		- 基本数据类型
			String Number Boolean Null Undefined
		- 引用数据类型
			Object
		- 基本数据类型的数据，变量是直接保存的它的值（放在栈空间）。
			变量与变量之间是互相独立的，修改一个变量不会影响其他的变量。
		- 引用数据类型的数据，变量是保存的对象的引用（内存地址）（栈堆双向）。
			如果多个变量指向的是同一个对象，此时修改一个变量的属性，会影响其他的变量。
		- 比较两个变量时，对于基本数据类型，比较的就是值，
			对于引用数据类型比较的是地址，地址相同才相同