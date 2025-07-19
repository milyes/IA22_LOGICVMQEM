lfunction executeIA22Logic(rule, context) {
  try {
    const condition = new Function("ctx", `return ${rule.if};`);
    const result = condition(context);
    return {
      decision: result ? rule.then : rule.else || "no_action",
      justification: result ? rule.because : rule.else_because || "Condition non remplie",
      signature_sha512: "TO_BE_COMPUTED"
    };
  } catch (e) {
    return {
      decision: "error",
      justification: "Erreur dans la règle IA22",
      signature_sha512: "INVALID"
    };
  }
}
