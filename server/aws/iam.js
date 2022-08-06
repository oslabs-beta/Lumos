const { IAMClient, IAM } = require("@aws-sdk/client-iam");

const iam = new IAM({ apiVersion: "2012-10-17" });

// iam.createAccessKey({ UserName: "carmen" }, (err, data) => {
//   if (err) console.log("err: ", err);
//   else console.log("data: ", data);
// });

//arn:aws:iam::487096115927:user/carmen

// iam.getUser({ UserName: "carmen" }, (err, data) => {
//   if (err) console.log("get user err: ", err);
//   else {
//     console.log("get user data: ", data);
//   }
// });
// const params = {
//   UserName: "plsworkdudeibegyou",
// };

// iam.createUser(params, (err, data) => {
//   if (err) console.log("err: ", err);
//   else {
//     console.log('create user data: ', data)

//     data.createAccessKey((error, res) => {
//       if (error) console.log("err: ", error);
//       else console.log("data: ", res);
//     });
//   }
// });

//Arn from console log:  arn:aws:iam::487096115927:user/test829392'
//arn from aws: arn:aws:iam::487096115927:user/test829392

// const attachRolePolicy = {
//   PolicyArn: "arn:aws:iam::487096115927:policy/AssumeRolePolicy",
//   UserName: params.UserName,
// };

// iam.attachUserPolicy(attachRolePolicy, (err, data) => {
//   if (err) console.log(err);
//   else console.log("attached policy params data : ", data);
// });

// const policy = {
//   Version: "2012-10-17",
//   Statement: [
//     {
//       Effect: "Allow",
//       Action: "logs:CreateLogGroup",
//       Resource: "arn:aws:iam::487096115927:user/adnan",
//     },
//     {
//       Effect: "Allow",
//       Action: [
//         "dynamodb:DeleteItem",
//         "dynamodb:GetItem",
//         "dynamodb:PutItem",
//         "dynamodb:Scan",
//         "dynamodb:UpdateItem",
//       ],
//       Resource: "arn:aws:iam::487096115927:user/adnan",
//     },
//   ],
// };

// "Action":["cloudwatch:GetMetricData","cloudwatch:ListMetrics"],

// const policyParams = {
//   PolicyDocument: JSON.stringify(policy),
//   PolicyName: "CarmenPolicy",
// };

// iam.createPolicy(policyParams, (err, data) => {
//   if (err) console.log("err: ", err);
//   else console.log("data: ", data);
// });

// const attachPolicyParams = {
//   PolicyArn: "arn:aws:iam::487096115927:policy/CarmenPolicy",
//   UserName: "adnan",
// };

// iam.attachUserPolicy(attachPolicyParams, (err, data) => {
//   if (err) console.log(err);
//   else console.log("attached policy params data : ", data);
// });

// const assumeRolePolicyParams = {
//   PolicyDocument: JSON.stringify({
//     Version: "2012-10-17",
//     Statement: [
//       {
//         Effect: "Allow",
//         Action: "sts:AssumeRole",
//         Resource: '*'
//       },
//     ],
//   }),
//   PolicyName: "AssumeRolePolicy",
// };

// const assumeRolePolicyUserParams = {
//   PolicyArn: "arn:aws:iam::487096115927:policy/AssumeRolePolicy",
//   UserName: "carmen",
// };

// iam.attachUserPolicy(assumeRolePolicyUserParams, (err, data) => {
//   if (err) console.log(err);
//   else console.log("attached policy params data : ", data);
// });

// iam.createPolicy(assumeRolePolicyParams, (err, data) => {
//     if(err) console.log(err);

//     else (console.log('attachedRolePolicyParams: ', data))
// })

// iam.getUser("LUMOSSTACK-LumosUser-3DUE34BQMYQS", (err, data) => {
//   if (err) console.log("err: ", err);
//   else {
//     console.log("data: ", data);
//   }
// });

// arn:aws:iam::487096115927:user/LUMOSSTACK-LumosUser-3DUE34BQMYQS


iam.a