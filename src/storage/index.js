/*
Storage封装
 */

const STORAGE_KEY='mall'
export default{
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val =this.getItem(module_name)
            val[key]=value;
            this.setItem(module_name,val)
        }else {
            let val = this.getStorage() //json对象
            // eslint-disable-next-line no-console
            console.log(val);
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    //获取值
    //获取某一个模块下面的属性user下面的username {"user":{"username":"jack","age":16,"sex":1,"xx":{"x":1,"y":1}}}
    getItem(key,module_name){  //获取user里面的值，需要模块这个参数      key。moudule_name=>username,user
        if  (module_name){
            let val=this.getStorage(module_name)
            if(val){
                return val[key]
            }
        }
        return this.getStorage()[key]
    },
    //获取整个数据
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY||'{}'))
    },
    //清空值
    clear(key,module_name){
        let val=this.getStorage()
        // eslint-disable-next-line no-console
        console.log(val);
        if(module_name){
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        //要将值重新写进去
        // eslint-disable-next-line no-console
        console.log(val);
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}
