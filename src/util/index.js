import Vue from 'vue'
// 存储localStorage时设置前缀
const storePrefix = 'DS_';

// 存储localStorage
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(storePrefix + name, content);
}

// 获取localStorage
export const getStore = name => {
	if (!name) return;
	return JSON.parse(window.localStorage.getItem(storePrefix + name));
}

// 删除localStorage
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(storePrefix + name);
}
// 获取某个较深的对象数组里某个特定值所在的对象
export const getObjByprop=(arr,key,value)=>{
	var obj='';
	 x(arr, key, value)
	return obj
	function x(arr, key, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(key) && arr[i][key] == value) {
            return obj=arr[i]
        } else {
            for (var k in arr[i]) {
                if (Array.isArray(arr[i][k])) {
                    x(arr[i][k], key, value)
                }
            }
        }
    }
	}
}