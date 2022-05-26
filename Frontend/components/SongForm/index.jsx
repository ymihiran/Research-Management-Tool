import { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import styles from "./styles.module.css";

const SongForm = () => {
  const [data, setData] = useState({
    name: "upload",
  });

  //   const handleChange = ({ currentTarget: input }) => {
  //     setData({ ...data, [input.name]: input.value });
  //     console.log("16 ", data);
  //   };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    console.log("21 ", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_API_URL + "/";
      const { data: res } = await axios.post(url, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FileInput
          name="song"
          label="Choose File"
          handleInputState={handleInputState}
          type="file"
          value={data.song}
        />
        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SongForm;
