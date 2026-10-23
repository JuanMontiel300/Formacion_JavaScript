class UserAuth {
    constructor(user) {
        this.user = user

    }

    verifyCredencials() {
        return true
    }
}


class UserSetting extends UserAuth {
    constructor(user, settings) {
        super(user)
        this.settings = settings;
    }

    changeSetting(settings) {
        if (this.verifyCredencials()) {
            console.log("Puedes modificar su confiduracion")
        }
    }


}

const newAccess = new UserSetting('Juan', 'Dark Mode')
newAccess.changeSetting()