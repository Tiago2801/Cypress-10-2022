const locators = {
    LOGN: {
        TF_WORKSPACE: '#workspace',
        TF_USER: '#username',
        TF_PASSWORD: '#password',
        BTN_ACCESS: '#submit_button'

    },
    MAIN: {
        IMG_MENU: '.icon-menu',
        MENU_LOCALS: '[href="/CenterWeb/serviceLocal"]'
    },
    LIST_LOCALS: {
        BTN_NEW_LOCAL: '#addServiceLocal > img',
        TF_SEARCH: '#genericFilter',
        BTN_SEARCH: '#serviceLocalList_doSearch',
        FN_XP_FIND_LOCAL: description => `//td[contains(text(),'${description}')]`,
        FN_EDIT: '.edit-record-serviceLocal'
    },
    DETAILS_LOCAL: {
        TF_DESCRIPTION: '#serviceLocal_description',
        TF_COMPANY_NAME: '#serviceLocal_corporateName',
        BTN_SAVE: '#formServiceLocal_doSave',
        BOX_ACTIVE: '#serviceLocal_active'
    }


}

export default locators