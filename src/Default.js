import React from 'react'

const Default = () => {
    const driverList = [
        {id:'1',name:'Mustafa ghouri',ContactNumber:'+923145869476',Address:'etc', Status:'active', Verification:'verified'},
        {id:'2',name:'Anas Ayub',ContactNumber:'+923145869236',Address:'etc', Status:'inactive', Verification:'unverified'},
        {id:'3',name:'M Bilal',ContactNumber:'+92314583476',Address:'etc', Status:'active', Verification:'verified'},
        {id:'4',name:'Sajjad',ContactNumber:'+923145449476',Address:'etc', Status:'inactive', Verification:'unverified'},
        {id:'5',name:'Faiz Ghori',ContactNumber:'+923245869476',Address:'etc', Status:'active', Verification:'verified'},
    ]
    const serviceList = [
        {id:'1',name:'Mustafa ghouri',ContactNumber:'+923145869476',Address:'etc', Status:'active', Verification:'verified'},
        {id:'2',name:'Anas Ayub',ContactNumber:'+923145869236',Address:'etc', Status:'inactive', Verification:'unverified'},
        {id:'3',name:'M Bilal',ContactNumber:'+92314583476',Address:'etc', Status:'active', Verification:'verified'},
        {id:'4',name:'Sajjad',ContactNumber:'+923145449476',Address:'etc', Status:'inactive', Verification:'unverified'},
        {id:'5',name:'Faiz Ghori',ContactNumber:'+923245869476',Address:'etc', Status:'active', Verification:'verified'},
    ]

    return {
        driverList,serviceList
    }
}

export default Default