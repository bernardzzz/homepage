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
        "text": "\u90a3\u4e00\u5929\u6211\u4e8c\u5341\u4e00\u5c81\uff0c\u5728\u6211\u4e00\u751f\u7684\u9ec4\u91d1\u65f6\u4ee3\u3002\u6211\u6709\u597d\u591a\u5962\u671b\u3002\u6211\u60f3\u7231\uff0c\u60f3\u5403\uff0c\u8fd8\u60f3\u5728\u4e00\u77ac\u95f4\u53d8\u6210\u5929\u4e0a\u534a\u660e\u534a\u6697\u7684\u4e91\u3002",
        "author": "\u738b\u5c0f\u6ce2"
    },
    {
        "text": "\u4f3c\u6c34\u6d41\u5e74\u624d\u662f\u4e00\u4e2a\u4eba\u7684\u4e00\u5207\uff0c\u5176\u4f59\u7684\u5168\u662f\u7247\u523b\u7684\u6b22\u5a31\u548c\u4e0d\u5e78\u3002",
        "author": "\u738b\u5c0f\u6ce2"
    },
    {
        "text": "\u4e00\u5207\u90fd\u5728\u4e0d\u53ef\u907f\u514d\u7684\u8d70\u5411\u5eb8\u4fd7\u3002",
        "author": "\u738b\u5c0f\u6ce2"
    },
    {
        "text": "\u6211\u770b\u5230\u4e00\u4e2a\u65e0\u667a\u7684\u4e16\u754c\uff0c\u4f46\u662f\u667a\u6167\u5728\u6df7\u6c8c\u4e2d\u5b58\u5728\uff1b\u6211\u770b\u5230\u4e00\u4e2a\u65e0\u8da3\u7684\u4e16\u754c\uff0c\u4f46\u662f\u6709\u8da3\u5728\u6df7\u6c8c\u4e2d\u5b58\u5728\u3002",
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
        "text": "\u77e5\u8bc6\u5206\u5b50\u6700\u5927\u7684\u5f31\u70b9\uff0c\u5c31\u662f\u628a\u81ea\u5df1\u7684\u504f\u597d\u5f53\u6210\u4e86\u4e16\u754c\u7684\u89c4\u5f8b\u3002",
        "author": "\u5218\u4ef2\u656c"
    },
    {
        "text": "\u5982\u679c\u4f60\u4e0d\u60f3\u88ab\u5f53\u505a\u97ed\u83dc\u6536\u5272\uff0c\u9996\u5148\u5c31\u8981\u653e\u5f03\u505a\u6e29\u5ba4\u91cc\u7684\u82b1\u6735\u3002",
        "author": "\u5218\u4ef2\u656c"
    },
    {
        "text": "\u5171\u540c\u4f53\u662f\u9700\u8981\u6d41\u8840\u624d\u80fd\u5efa\u7acb\u7684\uff0c\u4e0d\u9700\u8981\u6d41\u8840\u7684\u5171\u540c\u4f53\uff0c\u4e5f\u5c31\u662f\u968f\u65f6\u53ef\u4ee5\u89e3\u6563\u7684\u3002",
        "author": "\u5218\u4ef2\u656c"
    },
    {
        "text": "\u4e16\u754c\u4ece\u6765\u4e0d\u662f\u7531\u6e29\u60c5\u8109\u8109\u7684\u5584\u610f\u9a71\u52a8\u7684\uff0c\u800c\u662f\u7531\u6b8b\u9177\u65e0\u60c5\u7684\u535a\u5f08\u7ef4\u6301\u7684\u3002",
        "author": "\u5218\u4ef2\u656c"
    },
    {
        "text": "\u5f53\u4f60\u8bd5\u56fe\u7528\u5c0f\u806a\u660e\u6765\u4ee3\u66ff\u5927\u539f\u5219\u7684\u65f6\u5019\uff0c\u4f60\u5df2\u7ecf\u8d70\u5728\u6bc1\u706d\u7684\u8def\u4e0a\u4e86\u3002",
        "author": "\u5218\u4ef2\u656c"
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
    }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { quotes }; }
