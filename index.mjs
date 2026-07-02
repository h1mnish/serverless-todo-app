import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand
} from "@aws-sdk/lib-dynamodb";

import { randomUUID } from "crypto";

const client = new DynamoDBClient({});

const dynamoDB = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TABLE_NAME;

export const handler = async (event) => {

    try {

   // switch

}
catch(error){

    return{
        statusCode:500,
        body:JSON.stringify({
            message:"Internal Server Error",
            error:error.message
        })
    }

}

    const httpMethod =
    event.requestContext?.http?.method ||
    event.httpMethod;

    switch (httpMethod) {

        case "POST":
            return await createTask(event);

        case "GET":
            return await getTasks();

        case "PUT":
            return await updateTask(event);

        case "DELETE":
            return await deleteTask(event);

        default:
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Invalid Request"
                })
            };
    }

};

const createTask = async (event) => {

    const body = JSON.parse(event.body);

    const task = {
        taskId: randomUUID(),
        title: body.title,
        completed: false,
        createdAt: new Date().toISOString()
    };

    const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: task
    });

    await dynamoDB.send(command);

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Task Created Successfully",
            data: task
        })
    };

};

const getTasks = async () => {

    const command = new ScanCommand({
        TableName: TABLE_NAME
    });

    const result = await dynamoDB.send(command);

    return {
        statusCode: 200,
        body: JSON.stringify(result.Items)
    };

};

const updateTask = async (event) => {

    const body = JSON.parse(event.body);

    const command = new UpdateCommand({
        TableName: TABLE_NAME,
        Key: {
            taskId: body.taskId
        },
        UpdateExpression: "SET title = :title, completed = :completed",
        ExpressionAttributeValues: {
            ":title": body.title,
            ":completed": body.completed
        },
        ReturnValues: "ALL_NEW"
    });

    const result = await dynamoDB.send(command);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Task Updated Successfully",
            data: result.Attributes
        })
    };

};

const deleteTask = async (event) => {

    const body = JSON.parse(event.body);

    const command = new DeleteCommand({
        TableName: TABLE_NAME,
        Key: {
            taskId: body.taskId
        }
    });

    await dynamoDB.send(command);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Task Deleted Successfully"
        })
    };

};