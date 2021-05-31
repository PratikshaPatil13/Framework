var schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        uniqueCaseInsensitive: true,
        lowercase: true
    },
    fancyCommission: {
        type: Number,
        default: 0
    },
    bookmakerCommission: {
        type: Number,
        default: 0
    },
    timezone: {
        type: String,
        default: ""
    },
    maxTMMyRate: Schema.Types.Mixed,
    displayName: {
        type: String,
        lowercase: true,
        index: true
    },
    comment: {
        type: String
    },
    casino: {
        type: Boolean,
        default: true
    },
    cardgame: {
        type: Boolean,
        default: true
    },
    binary: {
        type: Boolean,
        default: true
    },
    sportsbook: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        minlength: [6, "Password must be at least 6 characters long"],
        required: true
    },
    creditLimit: {
        type: Number,
        default: 0
    },
    CompanyMasterMaxCreditLimit: {
        type: Number
    },
    TripleMasterMaxCreditLimit: {
        type: Number
    },
    PlayerMaxCreditLimit: {
        type: Number
    },
    DoubleMasterMaxCreditLimit: {
        type: Number
    },
    SuperMasterMaxCreditLimit: {
        type: Number
    },
    MasterMaxCreditLimit: {
        type: Number
    },
    image: {
        type: String
    },
    userType: {
        type: String,
        enum: ["Gold", "Bronze", "Silver", "Platinum"],
        default: "Bronze"
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "Member"
    },
    betfairAccount: {
        type: Schema.Types.ObjectId,
        ref: "BetfairAccount"
    },
    children: {
        type: [Schema.Types.ObjectId],
        ref: "Member"
    },
    accessLevel: {
        type: String,
        enum: [
            "CompanyMaster",
            "TripleMaster",
            "DoubleMaster",
            "SuperMaster",
            "Master",
            "Player"
        ],
        default: "Player"
    },
    loggedInTime: {
        type: Date
    },
    updatedTime: {
        type: Date
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspend"],
        default: "Active"
    },
    statusId: {
        type: Number,
        default: 1
    },
    priorStatus: {
        type: String,
        enum: ["Active", "Inactive", "Suspend"]
    },
    lock: {
        status: {
            type: Boolean,
            default: false
        },
        level: {
            type: String,
            enum: [
                "Master",
                "SuperMaster",
                "DoubleMaster",
                "TripleMaster",
                "CompanyMaster",
                ""
            ],
            default: ""
        }
    },
    globalLock: {
        type: Boolean,
        default: false
    },
    unLockedMembers: [],
    accessToken: {
        type: [],
        index: true
    },
    balanceUp: {
        type: Number,
        default: 0
    },
    otherMemberStatus: {
        type: String,
        enum: ["Active", "Inactive"]
    },
    globalPtStatus: {
        type: String,
        enum: ["On", "Off"],
        default: "On"
    },
    suspendStatus: {
        type: String,
        enum: ["On", "Off"],
        default: "Off"
    },
    commission: [
        {
            game: {
                type: Schema.Types.ObjectId,
                ref: "Game",
                required: true
            },
            memberCommissionPercent: {
                type: Number
            },
            parentCommissionPercent: {
                type: Number
            }
        }
    ],
    rate: [
        {
            game: {
                type: Schema.Types.ObjectId,
                ref: "Game"
            },
            memberRatePercent: {
                type: Number
            },
            parentRatePercent: {
                type: Number
            },
            memberSharePercentage: {
                type: Number
            },
            parentSharePercentage: {
                type: Number
            },
            memberAssignedRate: {
                type: Number
            },
            maxRate: {
                type: Number
            }
        }
    ],
    minRate: [
        {
            game: {
                type: Schema.Types.ObjectId,
                ref: "Game"
            },
            memberMinRate: {
                type: Number
            },
            parentMinRate: {
                type: Number
            }
        }
    ],
    maxBet: [
        {
            game: {
                type: Schema.Types.ObjectId,
                ref: "Game"
            },
            memberMaxBetAmt: {
                type: Number
            },
            parentMaxBetAmt: {
                type: Number
            },
            memberMaxExposureAmt: {
                type: Number
            },
            parentMaxExposureAmt: {
                type: Number
            }
        }
    ],
    currency: {
        type: Schema.Types.ObjectId,
        ref: "Currency"
    },
    deviceDetails: [
        {
            deviceId: String,
            loginTime: Date
        }
    ],
    walletDetails: {},
    sound: {
        type: Boolean,
        default: true
    },
    vibration: {
        type: Boolean,
        default: true
    },
    voiceChat: {
        type: Boolean,
        default: true
    },
    netExposure: {
        type: Number,
        default: 0
    },
    logInStatus: {
        type: String,
        enum: ["Active", "Inactive", "Semi-Active"]
    },
    winnings: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 0
    },
    virtual: {
        type: Boolean,
        default: false
    },
    realParent: {
        type: Schema.Types.ObjectId,
        ref: "Member"
    },
    currencyType: {
        type: String,
        enum: ["INR", "POINTS", "POINT@1"]
    },
    childrenPt: [
        {
            childId: {
                type: Schema.Types.ObjectId,
                ref: "Member"
            },
            status: Boolean
        }
    ],
    arLock: {
        status: {
            type: Boolean,
            default: false
        },
        level: {
            type: String,
            enum: [
                "Master",
                "SuperMaster",
                "DoubleMaster",
                "TripleMaster",
                "CompanyMaster",
                ""
            ],
            default: ""
        }
    },
    cardLock: {
        status: {
            type: Boolean,
            default: false
        },
        level: {
            type: String,
            enum: [
                "Master",
                "SuperMaster",
                "DoubleMaster",
                "TripleMaster",
                "CompanyMaster",
                ""
            ],
            default: ""
        }
    },
    binaryLock: {
        status: {
            type: Boolean,
            default: false
        },
        level: {
            type: String,
            enum: ["Master", "SuperMaster", "DoubleMaster", "TripleMaster", ""],
            default: ""
        }
    },
    globalPtStatusProcess: Boolean,
    hierarchy: [Schema.Types.ObjectId],
    siteUrl: {
        type: String
    },

    betfairRates: {
        type: {
            minBet: Number,
            percent: Number
        }
    },
    betfairCurrency: {
        type: Schema.Types.ObjectId,
        ref: "BetfairCurrency"
    },
    isTermsAccepted: {
        type: Boolean,
        default: false
    }
})
export default mongoose.model("Accounts", schema)
