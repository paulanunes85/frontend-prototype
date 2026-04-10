interface Props {
  businessRules: string;
  onBusinessRulesChange: (value: string) => void;
}

export function BusinessRulesStep({ businessRules, onBusinessRulesChange }: Props) {
  return (
    <fieldset className="form-step">
      <legend>Business Rules</legend>
      <textarea
        placeholder="Describe the business rules for the prototype...&#10;E.g.: Show sales from the last 30 days, filter by region, top 10 products."
        value={businessRules}
        onChange={(e) => onBusinessRulesChange(e.target.value)}
        rows={5}
      />
      <small>Optional. Describe specific behaviors the prototype should demonstrate.</small>
    </fieldset>
  );
}
