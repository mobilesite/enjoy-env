
# enjoy-env

A library which can get the browser environment information of the visitors for you.

一个获取用户浏览容器信息的库。

## 安装

```bash
npm i enjoy-env
```

引入类库：

```javascript
import enjoyEnv from 'enjoy-env';
```

## API

### libVersion

获得当前类库的版本号

### dpr

获得设备的设备像素比（devicePixelRatio）

## app

判别用户是在何种Native APP容器中访问当前页面

app.name - 表示在哪个APP中
app.isUnknown - true，不知道在哪个app中（未检测出来）；false，表示检测出来在某个APP中
app.isWeibo - 检测到在微博中
app.isWechat - 检测到在微信中

## system

获取用户设备的操作系统信息，返回信息格式如下

```
{
    name: '',      //系统名称
    version: ''    //系统版本号
}
```

## browser

获取用户设备的浏览器信息，返回信息格式如下

```
{
    name: '',      //浏览器名称
    version: ''    //浏览器版本号
}
```

