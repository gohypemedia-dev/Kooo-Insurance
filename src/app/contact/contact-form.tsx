"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactPage } from "@/content/site";
import { submitEnquiry, type EnquiryState } from "./actions";
import { cn } from "@/lib/utils";

const initialState: EnquiryState = { status: "idle" };

const inputClass =
  "w-full border border-navy/20 bg-cloud/50 px-4 py-3 text-base text-navy outline-none transition focus:border-navy focus:bg-white focus:ring-3 focus:ring-navy/10 aria-invalid:border-red-700";

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[15px] font-medium text-navy">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={inputClass}
      />
      {error && <span className="mt-1 block text-sm text-red-700">{error}</span>}
    </label>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    const [heading, ...rest] = contactPage.success;
    return (
      <div className="flex flex-col items-start gap-4 py-8" role="status">
        <CheckCircle2 className="size-12 text-navy" />
        <h3 className="text-2xl text-navy">{heading}</h3>
        {rest.map((line) => (
          <p key={line} className="text-muted-foreground">{line}</p>
        ))}
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5 sm:grid-cols-2" noValidate>
      <Field label="First name" name="firstName" required autoComplete="given-name" error={state.errors?.firstName} />
      <Field label="Last name" name="lastName" required autoComplete="family-name" error={state.errors?.lastName} />
      <Field label="Email" name="email" type="email" required autoComplete="email" error={state.errors?.email} />
      <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" error={state.errors?.phone} />
      <Field label="Business Name" name="businessName" autoComplete="organization" />
      <Field label="ABN" name="abn" />

      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-[15px] font-medium text-navy">Type of Insurance</span>
        <select name="insuranceType" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select an option
          </option>
          {contactPage.insuranceTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-[15px] font-medium text-navy">Tell us more about what you need</span>
        <textarea name="message" rows={5} className={cn(inputClass, "resize-y")} />
      </label>

      {state.status === "error" && (
        <div className="bg-red-50 p-4 text-sm text-red-700 sm:col-span-2" role="alert">
          {contactPage.error.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 bg-navy px-8 font-button font-medium text-white transition-colors hover:bg-navy-deep disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        Submit
      </button>
    </form>
  );
}
