Schema = {};

Schema.days = new SimpleSchema({
    date: {
      type: String,
      label: "Day"
    },
    day: {
      type: String
    },
    demo: {
      type: String,
      optional: true
    }
});

Schema.speaker = new SimpleSchema({
    _id: {
      type: String,
      optional: true
    },
    name: {
      type: String,
      label: "Full Name"
    },
    title: {
      type: String,
      label: "Title",
      optional: true
    },
    about: {
      type: String,
      label: "About",
      optional: true
    },
    company: {
      type: String,
      label: "Company",
      optional: true
    },
    position: {
      type: String,
      label: "Position",
      optional: true
    },
    picture: {
      type: String,
      optional: true
    },
    email: {
      type: String,
      label: "Email",
      optional: true
    },
    userId: {
      type: String,
      optional: true
    },
    agenda: {
      type: [String],
      optional: true
    },
    links: {
      type: [String],
      optional: true
    },
    visible: {
      type: Boolean,
      optional: true
    },
    added: {
        type: Number,
      optional: true
    },
    type: {
      type :Number
    },
    twitter: {
      type: String,
      label: "Twitter",
      optional: true
    },
    linkedin: {
      type: String,
      label: "LinkedIn",
      optional: true
    },
    facebook: {
      type: String,
      label: "Facebook",
      optional: true
    },
    google: {
      type: String,
      label: "Google",
      optional: true
    }
});

Schema.agenda = new SimpleSchema({
    _id: {
      type: String,
      optional: true
    },
    sesionname: {
      type: String,
      label: "Title"
    },
    description: {
      type: String,
      label: "Description",
      optional: true
    },
    starttime: {
      type: String,
      label: "Start Time",
      optional: true
    },
    endtime: {
      type: String,
      label: "End Time",
      optional: true
    },
    location: {
      type: String,
      optional: true
    },
    agendaspeakers: {
      type: [String],
      optional: true
    },
    catId: {
      type: String,
      optional: true,
    },
    catname: {
      type: String,
      optional: true
    },
    catcolor: {
      type: String,
      optional: true
    },
    feedback: {
      type: Boolean,
      optional: true
    },
    feedbackset : {
      type: Boolean,
      optional: true
    },
    attendance: {
      type: Boolean,
      optional: true
    },
    map: {
      type: String,
      optional: true
    },
    added: {
      type: Number,
      optional: true
    },
     type: {
      type :Number
    },
    day: {
      type: String,
      optional: true
    }
});

Schema.infopage = new SimpleSchema({
    _id: {
      type: String,
      optional: true
    },
    about: {
      type: String,
      label: "About",
      optional: true
    },
    links: {
      type: [String],
      optional: true
    }
});



Schema.finalfeedback = new SimpleSchema({
        programme1: {
            type: String,
            label: "Was the programme well organised?",
            max: 1
        },
        programme2: {
            type: String,
            label: "Was a good range of topics covered?",
            max: 1
        },
        programme3: {
            type: String,
            label: "Were the topics relevant to you?",
            max: 1
        },
        programme4: {
            type: String,
            label: "Was most of the information presented new to you?",
            max: 1
        },
        speaker1: {
            type: String,
            label: "Overall, were the speakers informative, prepared, and understandable?",
            max: 1
        },
        speaker2: {
            type: String,
            label: "Were the questions and discussion handled to your satisfaction?",
            max: 1
        },
        logistics1: {
            type: String,
            label: "Were the conference venu  and residential accommodations adequate?",
            max: 1
        },
        logistics2: {
            type: String,
            label: "Were the session starting and ending times convenient?",
            max: 1
        },
        logistics3: {
            type: String,
            label: "Was your registration handled smoothly?",
            max: 1
        },
        logistics4: {
            type: String,
            label: "Was the time of year convenient?",
            max: 1
        },
        logistics5: {
            type: String,
            label: "Did you find out about the conference in a timely manner?",
            max: 1
        },
        withyou1: {
            type: String,
            label: "Did you gain insight into Wikipedia in education at this conference?",
            max: 1
        },
        withyou2: {
            type: String,
            label: "Will you take action(s) on what you learned about Wikipedia in education?",
            max: 1
        },
        withyou3: {
            type: String,
            label: "Did you meet individuals you will stay in contact with in the future?",
            max: 1
        },
        withyou4: {
            type: String,
            label: "Overall, was the conference worthwhile?",
            max: 1
        },
        last1: {
            type: String,
            label: "What are your overall comments and suggestions regarding EduWiki 2013?",
            max: 1000,
            optional : true
        },
        owner: {
            type: String,
            max: 20
        },
        created: {
            type: Number,
            optional: true
        }
});
