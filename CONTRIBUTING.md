# 参与贡献

- [开发规范](#开发规范)
- [文档规范](#文档规范)
- [日志规范](#日志规范)

## 代码开发规范

> 待补充

## 编写文档规范

> 待补充

## 提交日志规范

> 以下下内容参考 [vue-cli 提交公约](https://github.com/vuejs/vue-cli/blob/dev/.github/COMMIT_CONVENTION.md)、 [Angular 提交公约](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)以及 [Angular 提交信息指南](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)编写。

### 太长了；不想读：

- 提交日志必须使用英文
- 提交日志必须使用英文半角字符
- 提交日志内容必须匹配如下的正则表达式:

```js
/^(revert: )?(feat|fix|docs|style|refactor|perf|test|ci|chore)(\(.+\))?: [^A-Z].{1,49}(?!\.$).$/;
```

### 详细说明

提交日志的内容要尽量简明扼要，以便于之后自动生成变更日志时，变更日志内容仍具可读性。

提交日志内容由一下内容构成：

1. [回退标识](#回退标识) [可选]
2. [操作标识](#操作标识) [必填]
3. [操作范围](#操作范围) [必填]
4. [操作内容](#操作内容) [必填]

#### 回退标识

所有的版本回退都要添加 `revert:` 标识，并将要回退版本的提交日志追加在冒号之后。请注意**冒号**后面有**空格**。

> 例如：
>
> 上一次提交为 `LayoutFlex` 组件新增了 `align` 属性，之后发现了一些缺陷，需要将版本回退时：
>
> ```
> revert: feat(LayoutFlex): add "align" option
> ```

#### 操作标识

本项目目前只允许进行以下操作：

- [特性添加|feat](#特性添加feat)
- [缺陷修复|fix](#缺陷修复fix)
- [文档编写|docs](#文档编写docs)
- [代码风格|style](#代码风格style)
- [代码重构|refactor](#代码重构refactor)
- [性能调优|perf](#性能调优perf)
- [测试用例|test](#测试用例test)
- [持续集成|ci](#持续集成ci)
- [杂项事务|chore](#杂项事务chore)

##### 特性添加|feat

在新增特性时使用此标识。

> 例如：
>
> 为布局组件 `LayoutFlex` 添加了一个名为 `align` 的新属性：
>
> ```
> feat(LayoutFlex): add "align" option
> ```

##### 缺陷修复|fix

> 修复代码缺陷时使用此标识。

> 例如：
>
> 修复表单组件 `FormStepper` 的数值超过上限范围后仍能点击：
>
> ```
> fix(FormStepper): handle click event when exceed the upper limit
>
> close #13
> ```

##### 文档编写|docs

增删改写任何组件文档时使用此标识。

> 请注意，与项目维护相关的文档（比如当前文档）请使用 [chore](#杂项事务chore) 操作。因为此类文档并不是项目维护主体的文档，而是项目维护的附加文档。

> 例如：
>
> 为布局组件 `LayoutFlex` 新增的 `align` 属性添加文档内容：
>
> ```
> docs(LayoutFlex): add "align" option
> ```

##### 代码风格|style

更改代码书写风格（如：空格，格式，缺少分号等）时使用此标识。

> 例如：
>
> 为布局组件 `LayoutFlex` 添加语句末尾遗漏的分号：
>
> ```
> style(LayoutFlex): add missing semicolon at the end of the statement
> ```

##### 代码重构|refactor

重构代码时使用此标识。

> 请注意，代码重构时既不能修复缺陷也不添加特性。

> 例如：
>
> 使用 `ES6` 模块化语法重构 `LayoutFlex` 布局组件
>
> ```
> refactor(LayoutFlex): using ES6 module syntax
> ```

##### 性能调优|perf

> 待补充

##### 测试用例|test

增删改任何测试用例时使用此标识。

> 例如：
>
> 更正布局组件 `LayoutFlex` 添加 `align` 属性测试时使用的状态值：
>
> ```
> feat(LayoutFlex): correct the wrong status for cases aligned in LayoutFlex
> ```

##### 持续集成|ci

变更 CI 的配置文件或脚本时使用此标识。

> 例如：
>
> 初始化 [`Travis CI`](https://www.travis-ci.org/) 的配置文件。
>
> ```
> ci(Travis): initial the Travis configuration
> ```

##### 杂项事务|chore

除上述操作外的所有操作均使用此标识。

> 例如：
>
> 更新 `vuepress` 包的版本：
>
> ```
> chore: update vuepress@1.0.0-alpha.29
> ```

#### 操作范围

操作范围虽然可以为空，但还是强烈建议为不同的[操作标识](#操作标识)添加合适的操作范围。例如 `feat|fix|docs|style|refactor|perf|test` 的操作范围只能是项目维护的主体，如各个 `UI` 组件。`ci` 的操作范围则是 `Travi CI`、`Circle`、`BrowserStack` 等持续集成框架中的一个。最后 `chore` 的操作范围可以是 `package.json` 之类非项目维护主体的部分。

> 请留意操作范围后的**冒号**后面有**空格**。

> 例如：
>
> 为布局组件 `LayoutFlex` 添加一个 `align` 属性
>
> ```
> feat(LayoutFlex): add "align" option
> ```

#### 操作内容

- 使用命令式，一般现在时：使用 **change** 不要用 ~~changed~~ 或者 ~~changes~~
- 首字母不要大写
- 内容末尾不要加`点(.)`

> 例如：
>
> 为布局组件 `LayoutFlex` 添加了一个名为 `align` 的新属性：
>
> ```
> feat(LayoutFlex): add "align" option
> ```
