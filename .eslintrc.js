module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "amd": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": 'babel-eslint',
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    rules: {
        'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
        'arrow-spacing': [2, { // 强制箭头函数的箭头前后使用一致的空格
            'before': true,
            'after': true
        }],
        'block-spacing': [2, 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
        'brace-style': [2, '1tbs', { // 大括号使用 1tbs 风格
            'allowSingleLine': true
        }],
        'camelcase': [0, { // 强制使用骆驼拼写法命名约定 0: 不启用
            'properties': 'always'
        }],
        'comma-dangle': [2, 'never'], // 语句末尾禁止逗号
        'comma-spacing': [2, { // 逗号前后是否必须带空格
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'], // 逗号书写位置风格, last 为逗号写在末尾
        'constructor-super': 2, // 构造函数要有 super
        'curly': [2, 'multi-line'], // 强制所有控制语句使用一致的括号风格, multi-line 单行省略大括号
        'dot-location': [2, 'property'], // 换行情况下点的位置, property 和后面的属性写到一行
        'eol-last': 2, // js 文件末尾带一个空行
        'eqeqeq': [2, 'allow-null'],
        'generator-star-spacing': [2, { // generator 前后空格
            'before': true,
            'after': true
        }],
        'handle-callback-err': [2, '^(err|error)$'], // 回调函数参数中带有 err 或 error 的话必须处理这些错误
        'indent': [2, 2, { // 两个空格缩进
            'SwitchCase': 1 // switch case 子句一个空格缩进
        }],
        'key-spacing': [2, { // 键值之间冒号前不用空格, 冒号后要加空格
            'beforeColon': false,
            'afterColon': true
        }],
        'keyword-spacing': [2, { // 关键字比如 function 前后要加空格
            'before': true,
            'after': true
        }],
        'new-cap': [2, { // 构造函数首字母大写和 new 的关系. 'newIsCap': true: new 的时候后面要跟首字母大写的函数
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 2, // 调用构造函数时必须带括号
        'no-array-constructor': 2, // 禁止使用 Array 来创建数组, 传入长度来创建稀疏数组这种方式除外
        'no-caller': 2, // 禁用 arguments.callee 和 arguments.caller
        'no-console': 'off', // 禁用 console
        'no-class-assign': 2, // 禁止修改类类型的数据 比如 Class A {} 之后不能再给 A 赋值其他
        'no-cond-assign': 2, // 条件语句中禁止出现赋值操作
        'no-const-assign': 2, // 禁止修改 const 赋值的变量
        'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
        'no-delete-var': 2, // 禁止使用 delete 删除变量
        'no-dupe-args': 2, // 禁止在 function 定义中出现重复的参数
        'no-dupe-class-members': 2, // 不允许类成员中有重复的名称
        'no-dupe-keys': 2, // 对象里面不允许出现重复的 key
        'no-duplicate-case': 2, // 禁止出现重复的 case 标签
        'no-empty-character-class': 2, // 正则表达式中不允许出现空字符集比如 []
        'no-empty-pattern': 2, // 禁止结构赋值使用空 var {a: {}} = foo;
        'no-eval': 2, // 禁用 eval 函数
        'no-ex-assign': 2, // 禁止对 catch 子句中的异常重新赋值
        'no-extend-native': 2, // 禁止扩展原生对象
        'no-extra-bind': 2, // 没必要使用 bind (即 bind 的 作用于没有被用到的时候) 不允许使用 bind
        'no-extra-boolean-cast': 2, // if 语句中禁止不必要的 boolean 转换
        'no-extra-parens': [2, 'functions'], // 禁止冗余的括号
        'no-fallthrough': 2, // case 语句必须 break 或 return
        'no-floating-decimal': 2, // 禁止胜率小数的 0 比如 .2  2.
        'no-func-assign': 2, // function 的声明变量不允许重新赋值
        'no-implied-eval': 2, // 禁止类 eval 执行方法 比如 setTimeout("alert('Hi!');", 100)
        'no-inner-declarations': [2, 'functions'], // 禁止在 if 等代码块中声明 function
        'no-invalid-regexp': 2, // 禁止出现无效的征兆表达式 比如 RegExp('[')
        'no-irregular-whitespace': 2, // 禁止不规则的空白符 全角之类
        'no-iterator': 2, // 禁用 __iterator__ 属性
        'no-labels': [2, { // 禁用标签
            'allowLoop': false,
            'allowSwitch': false
        }],
        'no-lone-blocks': 2, // 禁用不必要的嵌套块
        'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
        'no-multi-spaces': 2, // 禁止出现不符合规定的多个空格 比如 a  = 12
        'no-multi-str': 2, // 禁止使用斜线拼接成多行字符串  应采用 \n
        'no-multiple-empty-lines': [2, { // 禁止出现多个空行 max 一行
            'max': 1
        }],
        'no-global-assign': 2, // 禁止对 windows 之类的原生对象赋值
        'no-unsafe-negation': 2, // 禁止对关系运算符的左操作数使用否定操作符 比如 if (!key in object) 
        'no-new-object': 2, // 禁止使用 Object 构造函数 比如 new Object(), 应 var myObject = {}
        'no-new-require': 2, // 禁止调用 require 时使用 new 操作符 比如 new require('app-header')
        'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用 new Symbol("foo");
        'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-obj-calls': 2, // 禁止将全局对象当作函数进行调用 比如 JSON()
        'no-octal': 2, // 禁用八进制字面量
        'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
        'no-path-concat': 2, // 当使用 _dirname 和 _filename 时不允许字符串拼接, 比如 __dirname + "/foo.js"; 改用 path.join
        'no-proto': 2, // 禁用__proto__ __proto__ 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替。
        'no-redeclare': 2, // 禁止 重复使用 var 声明同一个变量
        'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格 改为一个空格加数量的方式/foo {3}bar/
        'no-return-assign': [2, 'except-parens'], // 禁止在返回语句中赋值 除非用括号括起来他们
        'no-self-assign': 2, // 禁止自身赋值
        'no-self-compare': 2, // 禁止自身比较
        'no-sequences': 2, // 不允许使用逗号操作符 除非表达式被包在括号中 或者 for 中
        'no-shadow-restricted-names': 2, // 关键字不能被遮蔽. 不能为其赋值
        'func-call-spacing': 2, //  禁止在函数名和开括号之间有空格
        'no-sparse-arrays': 2, // 禁止使用[ "red",, "blue" ]这样创建稀疏数组
        'no-this-before-super': 2, // extend 过得 class 里面在构造函数中禁止在调用super()之前使用this或super
        'no-throw-literal': 2, // 禁止抛出字面量和那些不可能是 Error 对象的表达式 比如 throw undefined
        'no-trailing-spaces': 2, // 禁用行尾空白
        'no-undef': 2, // 禁用未声明的变量
        'no-undef-init': 2, // 禁止将变量初始化为 undefined
        'no-unexpected-multiline': 2, // 禁止使用令人困惑的多行表达式
        'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件 比如 while(true)
        'no-unneeded-ternary': [2, { // 禁止可以表达为更简单结构的三元操作符 比如 x === 2 ? true : false;
            'defaultAssignment': true // 禁止条件表达式作为默认的赋值模式
        }],
        'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句 比如在 finally 中 return
        'no-unused-vars': [2, { // 禁止出现未使用过的变量
            'vars': 'all',
            'args': 'none' // 不检查参数
        }],
        'no-useless-call': 2, // 禁用不必要的 .call() 和 .apply()
        'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
        'no-useless-constructor': 2, // 禁用不必要的构造函数 比如啥都没做的构造函数
        'no-useless-escape': 2, // 禁用不必要的转义字符
        'no-whitespace-before-property': 2, // 禁止属性前有空白 foo. bar
        'no-with': 2, // 禁止使用 with
        'one-var': [2, { // 每个变量都应用 var 声明,不能用哪个同一个 var
            'initialized': 'never'
        }],
        'operator-linebreak': [2, 'after', { // 强制操作符使用一致的换行符风格 after  换行符放在操作符后面
            'overrides': {
                '?': 'before',
                ':': 'before'
            }
        }],
        'padded-blocks': [2, 'never'], // 块语句和类的开始或末尾有空行
        'quotes': [2, 'single', { // 统一使用单引号
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'semi': [2, 'never'], // 句末不适应分好
        'semi-spacing': [2, { // 强制分号之前和之后使用一致的空格
            'before': false,
            'after': true
        }],
        'space-before-blocks': [2, 'always'], // 要求语句块之前的空格 if() {}
        'space-before-function-paren': [2, 'always'], // 要求函数圆括号之前有一个空格比如 a () {}
        'space-in-parens': [2, 'never'], // 括号内不要空格
        'space-infix-ops': 2, // 操作符周围要有空格 a + b
        'space-unary-ops': [2, { // 要求或禁止在一元操作符之前或之后存在空格
            'words': true, // delete 等关键词要有空格
            'nonwords': false // ++ 等操作符后不能有
        }],
        'spaced-comment': [2, 'always', { // 要求在注释前有空白
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }],
        'template-curly-spacing': [2, 'never'], // 强制模板字符串中空格的使用,字符串模板 花括号内不要出现空格
        'use-isnan': 2, // 要求调用 isNaN()检查 NaN 不能 a == NaN 这样比较
        'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较  不能和 "strrng" 这样的错误比较
        'wrap-iife': [2, 'any'], // 需要把立即执行的函数包裹起来 var x = (function () { return { y: 1 };}());
        'yield-star-spacing': [2, 'both'], // 强制在 yield* 表达式中 * 周围使用空格 
        'yoda': [2, 'never'], // 禁止使用 if ("red" === color)  应该 if (color === "red")
        // 'prefer-const': 2,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'object-curly-spacing': [2, 'always'],
        'array-bracket-spacing': [2, 'never'] // 强制禁止数组方括号中使用空格
    }
};