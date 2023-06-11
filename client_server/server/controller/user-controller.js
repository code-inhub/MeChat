  import user from "../model/user.js";

export const addUser = async (request, response) => {
  try {
    let exist = await user.findOne({ sub: request.body.sub });

    if (exist) {
      response.status(200).json({ msg: "User already exists" });
      return;
    }

    const newUser = new user(request.body);
    await newUser.save(); //command to save data to mongodb
    return response.status(200).json(newUser);  //showing response in inspect section of browser  
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getUsers = async (request, response) => {
    try {
        const users = await user.find({});
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
