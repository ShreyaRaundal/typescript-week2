function terminate(message:string):never{
    throw new Error(message);
}