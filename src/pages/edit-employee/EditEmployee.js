import React from "react";
import { Card } from "react-bootstrap";
import { EditEmployeeForm } from "../../components/edit-employee-form/EditEmployeeForm";
import {DefaultLayout} from "../../components/layout/DefaultLayout";

const EditEmployee = () => {
	return (
		<DefaultLayout>
			

			<div className="add-new-product-form">
				<Card className="p-4">
					<EditEmployeeForm />
				</Card>
			</div>
		</DefaultLayout>
	);
};

export default EditEmployee;
