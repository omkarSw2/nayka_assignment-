import {
  Select,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProduct, getProducts } from "../../redux/Product/ProductApi";

const AddProductModal = ({ addIsOpen, addOnClose }) => {
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    picture: "https://placehold.co/600x400/orange/white",
    description: "",
    gender: "",
    category: "",
    price: "",
  };

  const [data, setData] = useState(initialState);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async () => {
    console.log(data);
    await dispatch(AddProduct(data));
    await dispatch(getProducts());
    addOnClose();
  };
  return (
    <>
      {/* Add modal Start */}
      <Modal
        closeOnOverlayClick={false}
        isOpen={addIsOpen}
        onClose={addOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="name"
                value={data.name}
                onChange={handlechange}
                name="name"
              />
            </FormControl>
            {/* image input Start */}
            <FormControl mt={4}>
              <FormLabel>Product Image</FormLabel>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </FormControl>

            {/* image input End */}

            <FormControl mt={4}>
              <FormLabel>Product Description</FormLabel>
              <Input
                placeholder="name"
                value={data.description}
                onChange={handlechange}
                name="description"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Select
                variant="unstyled"
                placeholder="Select Gender"
                onChange={handlechange}
                name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category </FormLabel>
              <Select
                variant="unstyled"
                placeholder="Select Category "
                onChange={handlechange}
                name="category">
                <option value="makeup">Makeup</option>
                <option value="skincare"> Skincare </option>
                <option value="haircare"> Haircare</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                type="number"
                value={data.price}
                onChange={handlechange}
                name="price"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handelSubmit}>
              Save
            </Button>
            <Button onClick={addOnClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add Modal End */}
    </>
  );
};

export default AddProductModal;
