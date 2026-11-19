
import express from "express";
import { z } from "zod";

const app = express();

app.use(express.json());

const userProfileSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    age: z.number().min(18)
}).partial();

type UserProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const result = userProfileSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.issues
        });
    }

    const updateBody: UserProfile = result.data;

    console.log(updateBody);

    return res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updateBody
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
