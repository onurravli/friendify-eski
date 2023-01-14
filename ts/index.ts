import axios from "axios";
import chalk from "chalk";

const getAccessToken = async (sp_dc: string) => {
    const endpoint = "";
    const config = {
        headers: {
            cookie: `sp_dc=${sp_dc}`,
        },
    };
    const res = await axios(endpoint, config)
        .then((res) => {
            return res.data.accessToken;
        })
        .catch((err) => {
            console.log(`An error occured (getAccessToken): ${err}`);
            process.exit(1);
        });
};

const getFriendActivity = async (accessToken: string) => {
    const endpoint = "";
    const config = {
        headers: {
            authorization: `Bearer ${accessToken}`,
        }
    };
    const res = await axios(endpoint, config)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(`An error occured (getFriendActivity): ${err}`);
        })
}