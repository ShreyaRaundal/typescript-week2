type Role="admin" | "user" | "guest";
interface Permission{
    canRead:boolean;
    canWrite:boolean;
    canDelete:boolean;
}

const rolePermission:Record<Role,Permission>={
    admin:{
        canRead:true,
        canWrite:true,
        canDelete:true
    },
    user:{
        canRead:true,
        canWrite:true,
        canDelete:true  
    }
    guest:{
        canRead:true,
        canWrite:false,
        canDelete:false;
    }
};