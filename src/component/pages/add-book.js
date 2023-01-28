import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useForm } from "react-hook-form";
import Header from "../global/header";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../global/footer";
import { ProgressBar } from "react-bootstrap";
import ReactQuill from "react-quill"; 
import Modal from "react-bootstrap/Modal";
import { CopyButton, ActionIcon, Tooltip, Button } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons';
const AddBook = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [image, setImage] = useState({});
  const [perc, setPerc] = useState(null);
  console.log(perc);
  useEffect(() => {
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
            setImage((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      await addDoc(collection(db, "books"), {
        ...data,
        ...image,
        offer: "0",
        offerPrice: data.price,
        timeStamp: serverTimestamp(),
      });
      Swal.fire({
        icon: "success",
        text: "Book add successfully",
      });
      navigate("/all-books");
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: { err },
      });
    }
    e.target.reset();
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
      [{ background: ["#e6fcf5", "#002222"] }],
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
      <Header headers="add-book" />
      <div className="add-book section-padding">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                        src={
                          file
                            ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
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
                  {/* /////////////////////////////////////////// */}
                  <div className="multiple_image">
                    {/* <label htmlFor="image1">Book Image 1</label> */}
                    <input
                      {...register("image1", { required: false })}
                      id="image1"
                      type="text"
                      placeholder="Book Image 1"
                    />
                    {errors.title && <p>Title is required</p>}
                    {/* <label htmlFor="image2">Book Image 2</label> */}
                    <input
                      {...register("image2", { required: false })}
                      id="image2"
                      type="text"
                      placeholder="Book Image 2"
                    />
                    {errors.title && <p>Title is required</p>}
                    {/* <label htmlFor="title">Book Image 3</label> */}
                    <input
                      {...register("image3", { required: false })}
                      id="image3"
                      type="text"
                      placeholder="Book Image 3"
                    />
                    {errors.title && <p>Title is required</p>}
                    {/* <label htmlFor="image4">Book Image 4</label> */}
                    <input
                      {...register("image4", { required: false })}
                      id="image4"
                      type="text"
                      placeholder="Book Image 4"
                    />
                    {errors.title && <p>Title is required</p>}
                  </div>
                  {/* /////////////////////////////////////////// */}
                  <label htmlFor="title">Book Title</label>
                  <input
                    {...register("title", { required: true })}
                    id="title"
                    type="text"
                    placeholder="Book Title"
                  />
                  {errors.title && <p>Title is required</p>}
                  <label htmlFor="subtitle">Book Subtitle</label>
                  <input
                    {...register("subtitle", { required: true })}
                    id="subtitle"
                    type="text"
                    placeholder="Book Subtitle"
                  />
                  {errors.subtitle && <p>Subtitle is required</p>}
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
                        value={code}
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
                    Description{" "}
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
                    {...register("desc", { required: false })}
                    id="desc"
                    rows="4"
                    type="text"
                    placeholder="Book Description"
                  />
                  {errors.description && <p>Description is required</p>}
                  <label htmlFor="author">Author Name</label>
                  <input
                    {...register("author", { required: true })}
                    id="author"
                    type="text"
                    placeholder="Author Name"
                  />
                  {errors.author && <p>Author is required</p>}
                  <label htmlFor="publisher">Publisher Name</label>
                  <input
                    {...register("publisher")}
                    id="publisher"
                    type="text"
                    placeholder="Publisher Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="add-book__input">
                  <label htmlFor="publishedDate">Published Date</label>
                  <input
                    {...register("publishedDate", { required: true })}
                    id="publishedDate"
                    type="date"
                    placeholder="Published Date"
                  />
                  {errors.publishedDate && <p>Publish Date is required</p>}
                  <label htmlFor="category">Category</label>
                  <input
                    {...register("category", { required: true })}
                    id="category"
                    type="text"
                    placeholder="Category"
                  />
                  {errors.category && <p>Category is required</p>}
                  <label htmlFor="isbn">ISBN</label>
                  <input
                    {...register("isbn")}
                    id="isbn"
                    type="text"
                    placeholder="ISBN"
                  />
                  <label htmlFor="pages">Number of pages</label>
                  <input
                    {...register("pages")}
                    id="pages"
                    type="number"
                    placeholder="Pages"
                  />
                  <label htmlFor="country">Country</label>
                  <input
                    {...register("country", { required: true })}
                    id="country"
                    type="text"
                    placeholder="Country"
                  />
                  {errors.country && <p>Country is required</p>}
                  <label htmlFor="language">Language</label>
                  <input
                    {...register("language", { required: true })}
                    id="language"
                    type="text"
                    placeholder="Language"
                  />
                  {errors.language && <p>Language is required</p>}
                  <label htmlFor="color">color</label>
                  <input
                    {...register("color", { required: true })}
                    id="color"
                    type="text"
                    placeholder="color"
                  />
                  {errors.color && <p>Color is required</p>}
                  <label htmlFor="price">Price</label>
                  <input
                    {...register("price", { required: true })}
                    id="price"
                    type="text"
                    placeholder="Price"
                  />
                  {errors.price && <p>Price is required</p>}
                  <div className="text-center mt-4">
                    <button
                      disabled={perc !== null && perc < 100}
                      type="submit"
                      className="button button__primary"
                    >
                      <span>Add Book</span>
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

export default AddBook;
