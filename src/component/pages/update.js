/* eslint-disable react-hooks/exhaustive-deps */
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../global/header";
import Footer from "../global/footer";
import { useAllContext } from "../context/context";
import ProgressBar from "react-bootstrap/ProgressBar";
import ReactQuill from "react-quill";
import Modal from "react-bootstrap/Modal";
import { CopyButton, ActionIcon, Tooltip, Button } from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons";

const Update = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const { allBooks } = useAllContext();
  const singleData = allBooks.filter((data) => data.id === id);
  const updateData = singleData[0];

  useEffect(() => {
    if (data) {
      setData({
        img: updateData?.img,
        title: updateData?.title,
        subtitle: updateData?.subtitle,
        desc: updateData?.desc,
        author: updateData?.author,
        publisher: updateData?.publisher,
        publishedDate: updateData?.publishedDate,
        category: updateData?.category,
        isbn: updateData?.isbn,
        pages: updateData?.pages,
        country: updateData?.country,
        language: updateData?.language,
        price: updateData?.price,
        offer: updateData?.offer,
        offerPrice: updateData?.offerPrice,
      });
    }
    const uploadFile = (e) => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            text: { error },
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData({ ...data, img: downloadURL });
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);
  const updateBook = (id) => {
    const timer = setTimeout(() => {
      const bookDoc = doc(db, "books", id);
      const newBook = data;
      updateDoc(bookDoc, newBook);
      Swal.fire({
        icon: "success",
        text: "Book updated successfully",
      });
      navigate("/manage");
    }, 100);
    return () => clearTimeout(timer);
  };

  // ///rich text
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["white", "#fff"] }],
      [{ background: ["#e6fcf5", "#111B21"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content, delta, source, editor) => {
    setCode(content);
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <div className="add-book section-padding">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="add-book__input">
                  <div className="add-book__input--image">
                    <label htmlFor="file" className="mt-0 mb-2">
                      <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                      <img
                        className="img-fluid"
                        src={file ? URL.createObjectURL(file) : updateData?.img}
                        alt=""
                      />
                    </label>
                    {perc !== null ? (
                      <ProgressBar
                        now={Math.round(perc)}
                        label={`${Math.round(perc)}%`}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  {/* <label htmlFor="title">Book Image 1</label> */}
                  <input
                    id="title"
                    type="text"
                    placeholder="Book Image 1"
                    defaultValue={updateData?.image1}
                    onChange={(e) =>
                      setData({
                        ...data,
                        image1: e.target.value,
                      })
                    }
                  />
                  {/* <label htmlFor="title">Book Image 1</label> */}
                  <input
                    id="title"
                    type="text"
                    placeholder="Book Image 2"
                    defaultValue={updateData?.image2}
                    onChange={(e) =>
                      setData({
                        ...data,
                        image2: e.target.value,
                      })
                    }
                  />
                  {/* <label htmlFor="title">Book Image 1</label> */}
                  <input
                    id="title"
                    type="text"
                    placeholder="Book Image 2"
                    defaultValue={updateData?.image3}
                    onChange={(e) =>
                      setData({
                        ...data,
                        image3: e.target.value,
                      })
                    }
                  />
                  {/* <label htmlFor="title">Book Image 1</label> */}
                  <input
                    id="title"
                    type="text"
                    placeholder="Book Image 4"
                    defaultValue={updateData?.image4}
                    onChange={(e) =>
                      setData({
                        ...data,
                        image4: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="title">Book Title</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Book Title"
                    defaultValue={updateData?.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        title: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="subtitle">Book Subtitle</label>
                  <input
                    id="subtitle"
                    type="text"
                    placeholder="Book Subtitle"
                    defaultValue={updateData?.subtitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        subtitle: e.target.value,
                      })
                    }
                  />
                  {/* ------------------------------------------------------- */}

                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Description</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {console.log(code)}
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        defaultValue={updateData?.desc}
                        onChange={handleProcedureContentChange}
                      />
                      <div className="d-flex justify-content-end">
                        <CopyButton value={code} timeout={3000}>
                          {({ copied, copy }) => (
                            <Tooltip
                              label={copied ? "Copied" : "Copy"}
                              withArrow
                              position="right"
                            >
                              <ActionIcon
                                color={copied ? "violet" : "teal"}
                                onClick={copy}
                              >
                                {copied ? (
                                  <IconCheck size={16} />
                                ) : (
                                  <IconCopy size={16} />
                                )}
                              </ActionIcon>
                            </Tooltip>
                          )}
                        </CopyButton>
                      </div>
                    </Modal.Body>
                  </Modal>

                  {/* ------------------------------------------------------- */}
                  <label htmlFor="desc">
                    Book Description{" "}
                    <Button
                      variant="light"
                      color="violet"
                      radius="xl"
                      size="xs"
                      uppercase
                      onClick={handleShow}
                    >
                      Open Editor
                    </Button>
                    </label>
                  <textarea
                    id="desc"
                    rows="4"
                    type="text"
                    placeholder="Book Description"
                    defaultValue={updateData?.desc}
                    onChange={(e) =>
                      setData({
                        ...data,
                        desc: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="author">Author Name</label>
                  <input
                    id="author"
                    type="text"
                    placeholder="Author Name"
                    defaultValue={updateData?.author}
                    onChange={(e) =>
                      setData({
                        ...data,
                        author: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="publisher">Publisher Name</label>
                  <input
                    id="publisher"
                    type="text"
                    placeholder="Publisher Name"
                    defaultValue={updateData?.publisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        publisher: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="add-book__input">
                  <label htmlFor="publishedDate">Published Date</label>
                  <input
                    id="publishedDate"
                    type="date"
                    placeholder="Published Date"
                    defaultValue={updateData?.publishedDate}
                    onChange={(e) =>
                      setData({
                        ...data,
                        publishedDate: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="category">Category</label>
                  <input
                    id="category"
                    type="text"
                    placeholder="Category"
                    defaultValue={updateData?.category}
                    onChange={(e) =>
                      setData({
                        ...data,
                        category: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="isbn">ISBN</label>
                  <input
                    id="isbn"
                    type="text"
                    placeholder="ISBN"
                    defaultValue={updateData?.isbn}
                    onChange={(e) =>
                      setData({
                        ...data,
                        isbn: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="pages">Number of pages</label>
                  <input
                    id="pages"
                    type="number"
                    placeholder="Pages"
                    defaultValue={updateData?.pages}
                    onChange={(e) =>
                      setData({
                        ...data,
                        pages: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    type="text"
                    placeholder="Country"
                    defaultValue={updateData?.country}
                    onChange={(e) =>
                      setData({
                        ...data,
                        country: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="language">Language</label>
                  <input
                    id="language"
                    type="text"
                    placeholder="Language"
                    defaultValue={updateData?.language}
                    onChange={(e) =>
                      setData({
                        ...data,
                        language: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    type="text"
                    placeholder="Price"
                    defaultValue={updateData?.price}
                    onChange={(e) =>
                      setData({
                        ...data,
                        price: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="offer">Offer</label>
                  <input
                    id="offer"
                    type="text"
                    placeholder="Offer"
                    defaultValue={updateData?.offer}
                    onChange={(e) =>
                      setData({
                        ...data,
                        offer: e.target.value,
                        offerPrice: Math.round(
                          parseInt(updateData?.price) -
                            parseInt(updateData?.price) *
                              (parseInt(e.target.value) / 100)
                        ),
                      })
                    }
                  />
                  <div className="text-center mt-4">
                    <button
                      className="button button__primary"
                      onClick={(e) => {
                        e.preventDefault();
                        updateBook(updateData?.id);
                      }}
                      disabled={perc !== null && perc < 100}
                    >
                      <span>Update Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Update;
