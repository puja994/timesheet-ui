import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchEmployees } from "../../pages/employee/employeeAction";

import { Form, ListGroup } from "react-bootstrap";

export const ShiftEmployeeList = ({ onCatSelect, selectedCatIds }) => {
	const dispatch = useDispatch();
	const { employeeList } = useSelector(state => state.employee);

	useEffect(() => {
		!employeeList.length && dispatch(fetchEmployees());
	}, [employeeList, dispatch]);

	const parentCatList = employeeList.filter(row => !row.parentCat);
	const childCatList = employeeList.filter(row => row.parentCat);

	return (
		<div>
			<ListGroup>
				{parentCatList.map(row => (
					<>
						<ListGroup.Item key={row._id}>
							<Form.Check
								type="checkbox"
								defaultValue={row._id}
								onChange={onCatSelect}
								checked={selectedCatIds?.includes(row._id)}
								label={row.name}
							/>
						</ListGroup.Item>
						{/* {
							<Form.Control 
							as="select"
							defaultValue={row._id}
							onChange={onCatSelect}
							checked={selectedCatIds?.includes(row._id)}
							label={row.name}>

							</Form.Control>
						} */}

						{childCatList.map(
							catItm =>
								row._id === catItm.parentCat && (
									<ListGroup.Item key={catItm._id}>
										<Form.Check
											type="checkbox"
											label={catItm.name}
											defaultValue={catItm._id}
											onChange={onCatSelect}
											checked={selectedCatIds?.includes(catItm._id)}
											className="ml-4"
										/>
									</ListGroup.Item>
								)
						)}
					</>
				))}
			</ListGroup>
		</div>
	);
};
