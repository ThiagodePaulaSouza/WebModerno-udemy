type IdTypes = string | number | undefined

let userId: IdTypes;
let adminId: IdTypes;

userId = 1
adminId = 'bom dia'

// Type 'true' is not assignable to type 'IdTypes
// userId = true