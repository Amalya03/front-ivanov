import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import Modal from "../../components/modal";
import Image from "../../components/image";
import Info from "../../components/card/info";
import Card from "../../components/card/intex";
import { getData } from "../../features/getData";
import { useDispatch, useSelector } from "react-redux";
import NoDataDisplay from "../../components/noDataDisplay";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [showModal, setShowModal] = useState({ index: null, status: false });

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const showInfo = (index) => {
    setShowModal({ status: true, index });
  };

  return (
    <>
      <div className={`${styles.homePage} d_flex just_center flex_wrap`}>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Card
                item={item}
                key={`${item.name}_${index}`}
                onClick={() => showInfo(index)}
              />
            );
          })
        ) : (
          <NoDataDisplay />
        )}
      </div>
      {showModal.index !== null && (
        <Modal
          showModal={showModal.status}
          closeModal={() => setShowModal({ index: null, status: false })}
        >
          <div className={styles.infoContainer}>
            <Image
              src={data[showModal.index].img}
              srcset={data[showModal.index].img_2x}
              imgStyle="w_full"
              containerStyle={styles.modalImg}
            />
            <div>
              <Info item={data[showModal.index]} />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
