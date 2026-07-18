const quotes = [
    {
        "text": "Talk is cheap. Show me the code.",
        "author": "Linus Torvalds"
    },
    {
        "text": "Software is like sex: it's better when it's free.",
        "author": "Linus Torvalds"
    },
    {
        "text": "If you think your users are idiots, only idiots will use it.",
        "author": "Linus Torvalds"
    },
    {
        "text": "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu).",
        "author": "Linus Torvalds"
    },
    {
        "text": "Free software is software that respects your freedom and the social solidarity of your community.",
        "author": "Richard Stallman"
    },
    {
        "text": "To understand why people are so passionate about free software, you have to understand the difference between 'free' as in 'free speech' and 'free' as in 'free beer'.",
        "author": "Richard Stallman"
    },
    {
        "text": "Sharing is good, and with digital technology, sharing is easy.",
        "author": "Richard Stallman"
    },
    {
        "text": "It's better to make a few people really happy than to make a lot of people semi-happy.",
        "author": "Paul Graham"
    },
    {
        "text": "The most important thing for startups to do is to focus on a single problem and solve it well.",
        "author": "Paul Graham"
    },
    {
        "text": "You can't have great software without a great team, and most software teams behave like dysfunctional families.",
        "author": "Paul Graham"
    },
    {
        "text": "When you don't create things, you become defined by your tastes rather than ability.",
        "author": "Paul Graham"
    },
    {
        "text": "I could restructure the program's flow, or use one little 'goto' instead.",
        "author": "xkcd"
    },
    {
        "text": "Compiling...",
        "author": "xkcd"
    },
    {
        "text": "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
        "author": "xkcd / Leon Bambrick"
    },
    {
        "text": "\u4e00\u4e2a\u4eba\u53ea\u62e5\u6709\u6b64\u751f\u6b64\u4e16\u662f\u4e0d\u591f\u7684\uff0c\u4ed6\u8fd8\u5e94\u8be5\u62e5\u6709\u8bd7\u610f\u7684\u4e16\u754c\u3002",
        "author": "\u738b\u5c0f\u6ce2"
    },
    {
        "text": "\u6211\u5bf9\u81ea\u5df1\u7684\u8981\u6c42\u5f88\u4f4e\uff1a\u6211\u6d3b\u5728\u4e16\u4e0a\uff0c\u65e0\u975e\u60f3\u8981\u660e\u767d\u4e9b\u9053\u7406\uff0c\u9047\u89c1\u4e9b\u6709\u8da3\u7684\u4e8b\u3002",
        "author": "\u738b\u5c0f\u6ce2"
    },
    {
        "text": "\u4eba\u7684\u4e00\u5207\u75db\u82e6\uff0c\u672c\u8d28\u4e0a\u90fd\u662f\u5bf9\u81ea\u5df1\u7684\u65e0\u80fd\u7684\u6124\u6012\u3002",
        "author": "\u738b\u5c0f\u6ce2"
    },
    {
        "text": "\u667a\u6167\u672c\u8eab\u5c31\u662f\u597d\u7684\u3002\u6709\u4e00\u5929\u6211\u4eec\u90fd\u4f1a\u6b7b\u53bb\uff0c\u8ffd\u6c42\u667a\u6167\u7684\u9053\u8def\u8fd8\u4f1a\u6709\u4eba\u5728\u8d70\u7740\u3002",
        "author": "\u738b\u5c0f\u6ce2"
    },
    {
        "text": "\u5fb7\u6027\u662f\u4e00\u5206\u94b1\u4e00\u5206\u8d27\u7684\uff0c\u6ca1\u6709\u65e0\u7f18\u65e0\u6545\u7684\u81ea\u7531\uff0c\u4e5f\u6ca1\u6709\u65e0\u7f18\u65e0\u6545\u7684\u5974\u5f79\u3002",
        "author": "\u5218\u4ef2\u656c"
    },
    {
        "text": "\u5386\u53f2\u662f\u4e0d\u80fd\u5047\u8bbe\u7684\uff0c\u4f46\u5386\u53f2\u7684\u8282\u70b9\u662f\u53ef\u4ee5\u901a\u8fc7\u535a\u5f08\u6765\u8ba4\u8bc6\u7684\u3002",
        "author": "\u5218\u4ef2\u656c"
    },
    {
        "text": "\u79e9\u5e8f\u7684\u751f\u4ea7\u548c\u8f93\u51fa\uff0c\u662f\u8861\u91cf\u4e00\u4e2a\u6587\u660e\u751f\u547d\u529b\u7684\u552f\u4e00\u6807\u51c6\u3002",
        "author": "\u5218\u4ef2\u656c"
    },
    {
        "text": "\u4eba\u751f\u5c31\u662f\u4e00\u573a\u4e0d\u65ad\u5730\u9002\u5e94\uff0c\u9002\u5e94\u81ea\u5df1\uff0c\u9002\u5e94\u522b\u4eba\uff0c\u9002\u5e94\u8fd9\u64cd\u86cb\u7684\u793e\u4f1a\u3002",
        "author": "\u5200\u5c14\u767b"
    },
    {
        "text": "\u5f88\u591a\u4eba\u4e0d\u4ec5\u4e0d\u77e5\u9053\u81ea\u5df1\u60f3\u8981\u4ec0\u4e48\uff0c\u751a\u81f3\u4e0d\u77e5\u9053\u81ea\u5df1\u6b63\u5728\u5931\u53bb\u4ec0\u4e48\u3002",
        "author": "\u5200\u5c14\u767b"
    },
    {
        "text": "\u6211\u4eec\u5728\u5386\u53f2\u4e2d\u5b66\u5230\u7684\u552f\u4e00\u6559\u8bad\uff0c\u5c31\u662f\u6211\u4eec\u65e0\u6cd5\u4ece\u5386\u53f2\u4e2d\u5b66\u5230\u4efb\u4f55\u6559\u8bad\u3002",
        "author": "\u5200\u5c14\u767b"
    },
    {
        "text": "Unix is simple. It just takes a genius to understand its simplicity.",
        "author": "Dennis Ritchie"
    },
    {
        "text": "Lisp isn't a language, it's a building material.",
        "author": "Alan Kay"
    },
    {
        "text": "Code never lies, comments sometimes do.",
        "author": "Ron Jeffries"
    },
    {
        "text": "Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test.",
        "author": "Ray Ozzie"
    },
    {
        "text": "The most disastrous thing that you can ever learn is your first programming language.",
        "author": "Alan Kay"
    },
    {
        "text": "Measuring programming progress by lines of code is like measuring airplane building progress by weight.",
        "author": "Bill Gates"
    }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { quotes }; }
