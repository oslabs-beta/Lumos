const { EC2Client, DescribeInstancesCommand } = require('@aws-sdk/client-ec2');

const getEC2 = async () => {
  const client = new EC2Client({ region: 'us-east-1' });
  const command = new DescribeInstancesCommand({ Filters: [] });
  const response = await client.send(command);

  const instances = response.Reservations.map((reservation) => ({
    ImageId: reservation.Instances[0].ImageId,
    InstanceType: reservation.Instances[0].InstanceType,
    LaunchTime: reservation.Instances[0].LaunchTime,
    PublicDnsNAme: reservation.Instances[0].PublicDnsName,
    State: reservation.Instances[0].State.Name,
    Architecture: reservation.Instances[0].Architecture,
  }));

  console.log(instances);
  return instances;
};

module.exports = getEC2;
