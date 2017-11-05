

## install develop enjoyEnvironment

```
npm i -g npm
npm install
npm i phantomjs -g
```

## 配置环境变量

1、windows下配置:

PHANTOMJS_BIN  C:\Users\milon\AppData\Roaming\npm\node_modules\phantomjs\bin\phantomjs

2、Mac系统下配置：

```
export PHANTOMJS_BIN=/usr/local/lib/node_modules/phantomjs/lib/phantom/bin/phantomjs
```

## package.json文件中scripts下的clear配置的不同：

Windows下：

```
"scripts": {
    "clear": "rd /s /q dist"
}
```

Mac系统下：

```
"scripts": {
    "clear": "rm -rf dist"
}
```

## API of enjoyEnv library

引入类库：

import enjoyEnv from 'enjoy-env';

### enjoyEnv.libVersion

获得当前类库的版本号

### enjoyEnv.dpr

获得设备的devicePixelRatio

### enjoyEnv.Version()

创建一个版本对象，例如`new enjoyEnv.Version('1.2.3')`，将获得一个对象：`{"version":"1.2.3"}`。

`new enjoyEnv.Version('1.2.3')`产生的对象还有gt(version)、gte(version)、lt(version)、lte(version)、eq(version)这几个方法，可以将`new enjoyEnv.Version('1.2.3')`中的version属性 与 传入的version（版本字符串，如'1.0.0'）参数进行比较，判断版本的大小。返回的值是Boolean类型。

- gt(version)表示大于。

- gte(version)表示大于等于。

- lt(version)表示小于。

- lte(version)表示小于等于。

- eq(version)表示等于。

例如：

new enjoyEnv.Version('1.2.3').gt('1.0.0')为true;

new enjoyEnv.Version('1.2.3').gte('1.2.0')为true;

new enjoyEnv.Version('1.2.3').lt('1.2.4')为true;

new enjoyEnv.Version('1.2.3').lte('1.2.4')为true;

new enjoyEnv.Version('1.2.3').eq('1.2.3')为true。

## enjoyEnv.app

判别用户是在何种Native APP容器中访问当前页面

enjoyEnv.app.name - 表示在哪个APP中
enjoyEnv.app.isUnknown - true，不知道在哪个app中（未检测出来）；false，表示检测出来在某个APP中
enjoyEnv.app.isWeibo - 检测到在微博中
enjoyEnv.app.isWechat - 检测到在微信中

## enjoyEnv.system

获取用户设备的操作系统信息，返回信息格式如下

```
{
    name: '',      //系统名称
    version: ''    //系统版本号
}
```

## enjoyEnv.browser

获取用户设备的浏览器信息，返回信息格式如下

```
{
    name: '',      //浏览器名称
    version: ''    //浏览器版本号
}
```

