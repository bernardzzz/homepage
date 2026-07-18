const quotes = [
    {
        "text": "Talk is cheap. Show me the code.",
        "author": "Linus Torvalds"
    },
    {
        "text": "Free software is software that respects your freedom and the social solidarity of your community.",
        "author": "Richard Stallman"
    },
    {
        "text": "It's better to make a few people really happy than to make a lot of people semi-happy.",
        "author": "Paul Graham"
    },
    {
        "text": "I could restructure the program's flow, or use one little 'goto' instead.",
        "author": "xkcd"
    },
    {
        "text": "Premature optimization is the root of all evil.",
        "author": "Donald Knuth"
    },
    {
        "text": "Programs must be written for people to read, and only incidentally for machines to execute.",
        "author": "Harold Abelson"
    },
    {
        "text": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "author": "Martin Fowler"
    },
    {
        "text": "First, solve the problem. Then, write the code.",
        "author": "John Johnson"
    },
    {
        "text": "Experience is the name everyone gives to their mistakes.",
        "author": "Oscar Wilde"
    },
    {
        "text": "In order to understand recursion, one must first understand recursion.",
        "author": "Unknown"
    },
    {
        "text": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison"
    },
    {
        "text": "Software is like sex: it's better when it's free.",
        "author": "Linus Torvalds"
    },
    {
        "text": "Simplicity is prerequisite for reliability.",
        "author": "Edsger W. Dijkstra"
    },
    {
        "text": "There are only two hard things in Computer Science: cache invalidation and naming things.",
        "author": "Phil Karlton"
    },
    {
        "text": "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "author": "Doug Linder"
    },
    {
        "text": "Java is to JavaScript what car is to Carpet.",
        "author": "Chris Heilmann"
    },
    {
        "text": "Code is like humor. When you have to explain it, it's bad.",
        "author": "Cory House"
    },
    {
        "text": "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
        "author": "Anonymous"
    },
    {
        "text": "Programming is the art of algorithm design and the craft of debugging errant code.",
        "author": "Ellen Ullman"
    },
    {
        "text": "Ruby is rubbish! PHP is phpantastic!",
        "author": "Nikita Popov"
    },
    {
        "text": "The computer was born to solve problems that did not exist before.",
        "author": "Bill Gates"
    },
    {
        "text": "Before software can be reusable it first has to be usable.",
        "author": "Ralph Johnson"
    },
    {
        "text": "Make it work, make it right, make it fast.",
        "author": "Kent Beck"
    },
    {
        "text": "One man's crappy software is another man's full-time job.",
        "author": "Jessica Gaston"
    },
    {
        "text": "It's not a bug - it's an undocumented feature.",
        "author": "Anonymous"
    },
    {
        "text": "Truth can only be found in one place: the code.",
        "author": "Robert C. Martin"
    },
    {
        "text": "Measuring programming progress by lines of code is like measuring airplane building progress by weight.",
        "author": "Bill Gates"
    },
    {
        "text": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        "author": "Edsger W. Dijkstra"
    },
    {
        "text": "The most important property of a program is whether it accomplishes the intention of its user.",
        "author": "C.A.R. Hoare"
    },
    {
        "text": "You can't trust code that you did not totally create yourself.",
        "author": "Ken Thompson"
    },
    {
        "text": "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
        "author": "Larry Niven"
    },
    {
        "text": "To iterate is human, to recurse divine.",
        "author": "L. Peter Deutsch"
    },
    {
        "text": "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
        "author": "Martin Fowler"
    },
    {
        "text": "Programming can be fun, so can cryptography; however they should not be combined.",
        "author": "Kreitzberg and Shneiderman"
    },
    {
        "text": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        "author": "John Woods"
    },
    {
        "text": "The function of good software is to make the complex appear to be simple.",
        "author": "Grady Booch"
    },
    {
        "text": "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.",
        "author": "Eagleson's Law"
    },
    {
        "text": "Don't comment bad code - rewrite it.",
        "author": "Brian Kernighan"
    },
    {
        "text": "Good code is its own best documentation.",
        "author": "Steve McConnell"
    },
    {
        "text": "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
        "author": "Dan Salomon"
    },
    {
        "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "author": "Will Durant"
    },
    {
        "text": "The only way to learn a new programming language is by writing programs in it.",
        "author": "Dennis Ritchie"
    },
    {
        "text": "UNIX is very simple, it just needs a genius to understand its simplicity.",
        "author": "Dennis Ritchie"
    },
    {
        "text": "The C language combines all the power of assembly language with all the ease-of-use of assembly language.",
        "author": "Gordon Letwin"
    },
    {
        "text": "I think Microsoft named .Net so it wouldn't show up in a Unix directory listing.",
        "author": "Oktal"
    },
    {
        "text": "Hardware: The parts of a computer system that can be kicked.",
        "author": "Jeff Pesis"
    },
    {
        "text": "There is no reason anyone would want a computer in their home.",
        "author": "Ken Olsen"
    },
    {
        "text": "If at first you don't succeed; call it version 1.0.",
        "author": "Unknown"
    },
    {
        "text": "The problem with troubleshooting is that trouble shoots back.",
        "author": "Unknown"
    },
    {
        "text": "A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!",
        "author": "Unknown"
    },
    {
        "text": "Software and cathedrals are much the same - first we build them, then we pray.",
        "author": "Sam Ewing"
    },
    {
        "text": "Computers are good at following instructions, but not at reading your mind.",
        "author": "Donald Knuth"
    },
    {
        "text": "If you automate a mess, you get an automated mess.",
        "author": "Rod Michael"
    },
    {
        "text": "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
        "author": "Antoine de Saint-Exupery"
    },
    {
        "text": "Program testing can be a very effective way to show the presence of bugs, but is hopelessly inadequate for showing their absence.",
        "author": "Edsger W. Dijkstra"
    },
    {
        "text": "There are 10 types of people in the world: those who understand binary, and those who don't.",
        "author": "Unknown"
    },
    {
        "text": "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
        "author": "Seymour Cray"
    },
    {
        "text": "The best code is no code at all.",
        "author": "Jeff Atwood"
    },
    {
        "text": "Copy and paste is a design error.",
        "author": "David Parnas"
    },
    {
        "text": "Real programmers don't comment their code. If it was hard to write, it should be hard to understand.",
        "author": "Unknown"
    },
    {
        "text": "It is easier to change the specification to fit the program than vice versa.",
        "author": "Alan Perlis"
    },
    {
        "text": "Debugging is twice as hard as writing the code in the first place.",
        "author": "Brian Kernighan"
    },
    {
        "text": "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
        "author": "Ellen Ullman"
    },
    {
        "text": "The most disastrous thing that you can ever learn is your first programming language.",
        "author": "Alan Kay"
    },
    {
        "text": "Walking on water and developing software from a specification are easy if both are frozen.",
        "author": "Edward V. Berard"
    },
    {
        "text": "It is not enough for code to work.",
        "author": "Robert C. Martin"
    },
    {
        "text": "When you don't create things, you become defined by your tastes rather than ability.",
        "author": "Why The Lucky Stiff"
    },
    {
        "text": "Documentation is a love letter that you write to your future self.",
        "author": "Damian Conway"
    },
    {
        "text": "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        "author": "Patrick McKenzie"
    },
    {
        "text": "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.",
        "author": "Gerald Weinberg"
    },
    {
        "text": "You can't have great software without a great team, and most software teams behave like dysfunctional families.",
        "author": "Jim McCarthy"
    },
    {
        "text": "The sooner you start to code, the longer the program will take.",
        "author": "Roy Carlson"
    },
    {
        "text": "A computer lets you make more mistakes faster than any other invention in human history.",
        "author": "Dan Rather"
    },
    {
        "text": "I'm not a great programmer; I'm just a good programmer with great habits.",
        "author": "Kent Beck"
    },
    {
        "text": "Testing leads to failure, and failure leads to understanding.",
        "author": "Burt Rutan"
    },
    {
        "text": "Optimism is an occupational hazard of programming: feedback is the treatment.",
        "author": "Kent Beck"
    },
    {
        "text": "The bearing of a child takes nine months, no matter how many women are assigned.",
        "author": "Fred Brooks"
    },
    {
        "text": "How does a project get to be a year late? One day at a time.",
        "author": "Fred Brooks"
    },
    {
        "text": "Programming is like kicking yourself in the face, sooner or later your nose will bleed.",
        "author": "Kyle Woodbury"
    },
    {
        "text": "Good design adds value faster than it adds cost.",
        "author": "Thomas C. Gale"
    },
    {
        "text": "The most important single aspect of software development is to be clear about what you are trying to build.",
        "author": "Bjarne Stroustrup"
    },
    {
        "text": "A language that doesn't affect the way you think about programming is not worth knowing.",
        "author": "Alan Perlis"
    },
    {
        "text": "Lisp isn't a language, it's a building material.",
        "author": "Alan Kay"
    },
    {
        "text": "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.",
        "author": "Ted Nelson"
    },
    {
        "text": "In theory, there is no difference between theory and practice. But, in practice, there is.",
        "author": "Jan L.A. van de Snepscheut"
    },
    {
        "text": "The purpose of software engineering is to control complexity, not to create it.",
        "author": "Pamela Zave"
    },
    {
        "text": "The Internet? Is that thing still around?",
        "author": "Homer Simpson"
    },
    {
        "text": "Controlling complexity is the essence of computer programming.",
        "author": "Brian Kernighan"
    },
    {
        "text": "Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test.",
        "author": "Ray Ozzie"
    },
    {
        "text": "There is no programming language - no matter how structured - that will prevent programmers from making bad programs.",
        "author": "Larry Flon"
    },
    {
        "text": "If you think your users are idiots, only idiots will use it.",
        "author": "Linus Torvalds"
    },
    {
        "text": "The best performance improvement is the transition from the nonworking state to the working state.",
        "author": "J. Osterhout"
    },
    {
        "text": "Without requirements or design, programming is the art of adding bugs to an empty text file.",
        "author": "Louis Srygley"
    },
    {
        "text": "An API that isn't comprehensible isn't usable.",
        "author": "James Gosling"
    },
    {
        "text": "The most beautiful code I ever wrote was a single line of a regular expression.",
        "author": "Unknown"
    },
    {
        "text": "Code never lies, comments sometimes do.",
        "author": "Ron Jeffries"
    },
    {
        "text": "The older I get, the more I realize that the only thing a programmer can really be proud of is deleting code.",
        "author": "Unknown"
    },
    {
        "text": "It's OK to figure out murder mysteries, but you shouldn't need to figure out code.",
        "author": "Steve McConnell"
    },
    {
        "text": "Any sufficiently advanced bug is indistinguishable from a feature.",
        "author": "Rich Kulawiec"
    },
    {
        "text": "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies.",
        "author": "C.A.R. Hoare"
    }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { quotes }; }
