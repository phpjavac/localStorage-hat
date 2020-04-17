# 使用方法

```JavaScript

npm i zx-local

import Local from 'zx-local';

const local = new Local();
// 改为自己的项目名称
local.setName('clap');
local.dispatchEventStroage();
```

即可为项目中所有localStorage操作加上前缀
