import React, {SyntheticEvent, useState} from 'react';
import Layout from '../../components/Layout';
import {Button, TextField} from "@mui/material";
import axios from 'axios';
import {Redirect} from "react-router-dom";

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('products', {
            title,
            description,
            image,
            price
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/products'} />;
    }

    return (
        <Layout>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <TextField label="Title"
                                onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <TextField label="Description" rows={4} multiline
                               onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <TextField label="Image"
                               onChange={e => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <TextField label="Price" type="number"
                               onChange={e => setPrice(parseInt(e.target.value))}
                    />
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </Layout>
    );
};

export default ProductForm;
