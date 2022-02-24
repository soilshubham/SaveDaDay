import toast from "react-hot-toast";

export default {
  incompleteFieldsError: (msg) =>
    toast.error(msg, {
      duration: 2000,
      id: "incomplete-fields-error",
    }),
  invalidUsername: (msg) =>
    toast.error(msg, {
      duration: 2000,
      id: "invalid-username",
    }),
  invalidPassword: (msg) =>
    toast.error(msg, {
      duration: 2000,
      id: "invalid-password",
    }),
  invalidCreds: (msg) =>
    toast.error(msg, {
      duration: 2000,
      id: "invalid-password",
    }),
  error: (msg) =>
    toast.error(msg, {
      duration: 2000,
    }),
  success: (msg) =>
    toast.success(msg, {
      duration: 2000,
    }),
};
