import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 py-4 text-lg font-semibold transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </button>
  );
};
