type Status ="success" | "error" | "loading";

const message:Record<Status,string>={
    success:"Data loaded successfully",
    error:"something went wrong",
    loading:"pending wait..."
};