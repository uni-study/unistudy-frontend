import { useEffect, useState } from "react";
import axios from "axios";

useEffect(() => {
    axios
        .get(`http://10.64.154.163:8080/posts`)
        .then((response) => {
            setPostlist(response.data);
        })

        .catch(function (error) {
            console.log(error);
        });
}, []);
