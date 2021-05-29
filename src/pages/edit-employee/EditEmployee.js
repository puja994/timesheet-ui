import React from "react";
import { Card } from "react-bootstrap";
import { EditEmployeeForm } from "../../components/edit-employee-form/EditEmployeeForm";
import DefaultLayout from "../../components/layout/DefaultLayout";

const EditEmployee = () => {
	return (
		<DefaultLayout>
			<h1>Update Product</h1>
			<hr />

			<div className="add-new-product-form">
				<Card className="p-4">
					<EditEmployeeForm />
				</Card>
			</div>
		</DefaultLayout>
	);
};

export default EditEmployee;
