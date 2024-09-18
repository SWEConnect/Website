import { Application, ApplicationQuestion, Project } from "@prisma/client";
import Link from "next/link";
import { InfoSquare } from "tabler-icons-react";

import { DATE_TIME_FORMAT_OPTS } from "~/constants";
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import { MovingBorder } from "../aceternity_ui/moving-border";

type PropType = {
  application: Application & {
    questions: ApplicationQuestion[];
    project: Project | null;
  };
  projectId: string | null;
};

const ApplicationPreviewCard = (props: PropType) => {
  const { application } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="group m-2 relative p-[3px] w-[20rem] md:w-[25rem] overflow-hidden rounded-xl">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <MovingBorder duration={3000} rx="30%" ry="30%">
          <div className="h-80 w-80 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]" />
        </MovingBorder>
      </div>

      <Card className="relative mb-0 flex w-full flex-col bg-white shadow-xl">
        <Button onPress={onOpen} className="absolute w-full h-full z-50 bg-transparent"></Button>

        <CardHeader className="font-bold py-4 flex flex-col justify-start items-start">
          <h1 className="font-black">{application.name}</h1>
          <h4 className="font-semibold">{application.project?.name}</h4>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4">
          <p>{application.description}</p>
          {application.desiredSkills.length > 0 && (
            <div className="mx-auto">
              <div className="flex flex-wrap gap-2">
                {application.desiredSkills.map((skill: string, index: number) => (
                  <Chip
                    className="h-[2rem] bg-secondary capitalize text-white hover:cursor-pointer"
                    key={`skillBadge${index}`}
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>
          )}
        </CardBody>
        {application.deadline && (
          <>
            <Divider />
            <CardFooter className="text-sm">
              Deadline:&nbsp;
              <span className="font-semibold">
                {application.deadline.toLocaleDateString(
                  undefined,
                  DATE_TIME_FORMAT_OPTS,
                )}
              </span>
            </CardFooter>
          </>
        )}

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Preview Application</ModalHeader>
                <ModalBody>
                  <p>
                    {application.project ? (
                      <div className="flex flex-col items-center justify-center py-4 text-center">
                        <h3 className="tracking-none text-xl font-black uppercase">
                          {application.project.name}
                        </h3>
                        <p className="mx-10 py-2">
                          {application.project.description}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    <Link href={`/project/${application.projectId}/apply/${application.id}`}>
                      Apply
                    </Link>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card >
    </main>
    //   <Card className="relative my-6 mb-0 mr-4 flex w-[20rem] flex-col rounded-xl bg-white shadow-xl md:w-[25rem]">
    //     <CardHeader className="pb-0">
    //       <CardTitle>{application.name}</CardTitle>
    //       <CardDescription>{application.description}</CardDescription>
    //     </CardHeader>
    //     <CardContent className="group flex h-full flex-col">
    //       <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform transition ease-in-out">
    //         <Dialog>
    //           <DialogTrigger asChild>
    //             <div className="group flex h-full w-full items-center hover:cursor-pointer">
    //               <div className="absolute h-full w-full rounded-2xl bg-black opacity-0 duration-300 group-hover:opacity-10" />
    //               <InfoSquare className="mx-auto h-24 w-24 text-gray opacity-0 duration-300 group-hover:text-primary group-hover:opacity-100" />
    //             </div>
    //           </DialogTrigger>
    //           <DialogContent className="max-w-4xl">
    //             <DialogHeader>
    //               <DialogTitle>Preview Application</DialogTitle>
    //             </DialogHeader>
    //             {application.project ? (
    //               <div className="flex flex-col items-center justify-center py-4 text-center">
    //                 <h3 className="tracking-none text-xl font-black uppercase">
    //                   {application.project.name}
    //                 </h3>
    //                 <p className="mx-10 py-2">
    //                   {application.project.description}
    //                 </p>
    //               </div>
    //             ) : (
    //               <></>
    //             )}
    //             <DialogFooter>
    //               <Button className="mx-auto">
    //                 <Link
    //                   href={`/project/${application.projectId}/apply/${application.id}`}
    //                 >
    //                   {`Apply for ${application.name}`}
    //                 </Link>
    //               </Button>
    //             </DialogFooter>
    //           </DialogContent>
    //         </Dialog>
    //       </div>

    //       {application.desiredSkills.length > 0 && (
    //         <div className="mt-4 flex flex-col">
    //           <p className="py-px pb-2 text-sm font-semibold underline">
    //             Desired Skills
    //           </p>
    //           <div className="flex flex-wrap gap-2">
    //             {application.desiredSkills.map((skill: string, index: number) => (
    //               <Badge
    //                 className="h-[2rem] bg-secondary capitalize text-white shadow-xl hover:cursor-pointer"
    //                 key={`skillBadge${index}`}
    //               >
    //                 {skill}
    //               </Badge>
    //             ))}
    //           </div>
    //         </div>
    //       )}

    //       <div className="flex grow flex-col justify-end">
    //         <Separator orientation="horizontal" className="my-4 bg-secondary" />
    //         {application.deadline && (
    //           <p>
    //             Deadline:{" "}
    //             <span className="text-sm font-semibold">
    //               {application.deadline.toLocaleDateString(
    //                 undefined,
    //                 DATE_TIME_FORMAT_OPTS,
    //               )}
    //             </span>
    //           </p>
    //         )}
    //       </div>
    //     </CardContent>
    //   </Card>
  );
};

export default ApplicationPreviewCard;
